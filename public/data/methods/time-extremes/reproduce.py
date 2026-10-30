"""Reproduce Blue Hill annual TMAX means, TXx, SU and OLS/HAC trends.
Python 3 standard library only. Default checks published outputs without writing.
Use --write to regenerate daily.csv, annual.csv, monthly.csv and results.json.
Source: NOAA GHCN-Daily, DOI 10.7289/V5D21VHZ, frozen original and provenance.json.
"""
import calendar
import csv
from datetime import date, timedelta
import hashlib
import io
import json
import math
from pathlib import Path
from statistics import mean, NormalDist
import sys

BASE = Path(__file__).resolve().parent

def csv_bytes(rows):
    buffer = io.StringIO(newline="")
    writer = csv.DictWriter(buffer, fieldnames=list(rows[0]), lineterminator=chr(10))
    writer.writeheader()
    writer.writerows(rows)
    return buffer.getvalue().encode("utf8")

def trend(years, values, lag=3):
    n = len(years)
    assert years == list(range(years[0], years[-1] + 1)), "HAC expects equally spaced years"
    center = mean(years)
    x = [year - center for year in years]
    average = mean(values)
    sxx = sum(t*t for t in x)
    sxy = sum(t*(y-average) for t,y in zip(x,values))
    slope = sxy / sxx
    residuals = [y-average-slope*t for t,y in zip(x,values)]
    # OLS slope score, centered time makes the intercept cross term vanish.
    z = [t*e for t,e in zip(x,residuals)]
    meat = sum(v*v for v in z)
    for k in range(1,lag+1):
        weight = 1-k/(lag+1)
        meat += 2*weight*sum(z[i]*z[i-k] for i in range(k,n))
    variance = meat/(sxx*sxx)
    assert variance >= 0
    se = math.sqrt(variance)
    critical = NormalDist().inv_cdf(0.975)
    return dict(n=n,center_year=center,mean_c=average,sxx_year2=sxx,
                sxy_c_year=sxy,slope_c_per_year=slope,slope_c_per_decade=10*slope,
                maximum_lag_years=lag,standard_error_c_per_decade=10*se,
                normal_95_interval_c_per_decade=[10*(slope-critical*se),10*(slope+critical*se)],
                residual_lag1_autocorrelation=sum(a*b for a,b in zip(residuals[1:],residuals[:-1]))/sum(e*e for e in residuals),
                residual_sum=sum(residuals),time_residual_sum=sum(t*e for t,e in zip(x,residuals)))

def calculate():
    meta = json.loads((BASE/"provenance.json").read_text(encoding="utf8"))
    for filename, digest in meta["sha256"].items():
        assert hashlib.sha256((BASE/filename).read_bytes()).hexdigest() == digest, filename
    daily = []
    for line in (BASE/"USW00014753-original.dly").read_text(encoding="ascii").splitlines():
        assert len(line) == 269
        assert line[:11] == "USW00014753"
        year, month = int(line[11:15]), int(line[15:17])
        if not 1961 <= year <= 2024 or line[17:21] != "TMAX":
            continue
        for day in range(1, calendar.monthrange(year,month)[1]+1):
            cell = line[21+(day-1)*8:29+(day-1)*8]
            value, mflag, qflag, sflag = int(cell[:5]), cell[5], cell[6], cell[7]
            assert value != -9999 and qflag == " ", "Selected day is missing or flagged"
            daily.append(dict(date=date(year,month,day).isoformat(),tmax_c=value/10,
                              mflag=mflag.strip(),qflag=qflag.strip(),sflag=sflag.strip()))
    daily.sort(key=lambda r:r["date"])
    first,last = date(1961,1,1),date(2024,12,31)
    expected = [(first+timedelta(days=i)).isoformat() for i in range((last-first).days+1)]
    assert [r["date"] for r in daily] == expected, "Missing or duplicate calendar days"
    annual=[]
    monthly=[]
    for year in range(1961,2025):
        subset=[r for r in daily if r["date"].startswith(str(year))]
        vals=[r["tmax_c"] for r in subset]
        maximum=max(vals)
        annual.append(dict(year=year,days=len(vals),mean_tmax_c=mean(vals),txx_c=maximum,
                           su_days=sum(v>25 for v in vals),
                           txx_dates="|".join(r["date"] for r in subset if r["tmax_c"]==maximum)))
        for month in range(1,13):
            v=[r["tmax_c"] for r in subset if int(r["date"][5:7])==month]
            monthly.append(dict(month=f"{year}-{month:02d}",days=len(v),mean_tmax_c=mean(v)))
    annual_reference=mean(r["mean_tmax_c"] for r in annual if r["year"]<=1990)
    normals={m:mean(r["mean_tmax_c"] for r in monthly if int(r["month"][:4])<=1990 and int(r["month"][5:])==m) for m in range(1,13)}
    for row in annual: row["anomaly_c"]=row["mean_tmax_c"]-annual_reference
    for row in monthly:
        row["reference_c"]=normals[int(row["month"][5:])]
        row["anomaly_c"]=row["mean_tmax_c"]-row["reference_c"]
    years=[r["year"] for r in annual]
    means=[r["mean_tmax_c"] for r in annual]
    maxima=[r["txx_c"] for r in annual]
    result=dict(station="USW00014753",start=first.isoformat(),end=last.isoformat(),
                daily_records=len(daily),annual_records=len(annual),monthly_records=len(monthly),
                annual_reference_1961_1990_c=annual_reference,
                annual_mean_trend=trend(years,means),txx_trend=trend(years,maxima),
                lag_sensitivity={str(lag):dict(mean=trend(years,means,lag),txx=trend(years,maxima,lag)) for lag in [1,5,8]})
    # Subtracting a fixed reference cannot change the fitted slope.
    assert math.isclose(trend(years,[r["anomaly_c"] for r in annual])["slope_c_per_year"],result["annual_mean_trend"]["slope_c_per_year"],abs_tol=1e-14)
    return daily,annual,monthly,result

if __name__ == "__main__":
    daily,annual,monthly,result=calculate()
    outputs={"daily.csv":csv_bytes(daily),"annual.csv":csv_bytes(annual),"monthly.csv":csv_bytes(monthly),
             "results.json":(json.dumps(result,indent=2,ensure_ascii=False)+chr(10)).encode("utf8")}
    for filename, content in outputs.items():
        if "--write" in sys.argv:(BASE/filename).write_bytes(content)
        else:assert (BASE/filename).read_bytes()==content, filename
    print(f"Daily records: {len(daily)}, complete years: {len(annual)}")
    for name in ["annual_mean_trend","txx_trend"]:
        r=result[name]
        print(name, f'{r["slope_c_per_decade"]:+.6f} deg C/decade', r["normal_95_interval_c_per_decade"])
    print("Reference and original-file checks passed.")
