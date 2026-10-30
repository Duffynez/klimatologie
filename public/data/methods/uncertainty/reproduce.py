"""Reproduce HadCRUT5 2024 global temperature uncertainty from public annual files.
Python 3.10+ standard library. Default checks outputs. --write regenerates them.
The additional 2023/2024 pairing calculation concerns ensemble uncertainty only.
"""
from pathlib import Path
import csv
import hashlib
import io
import json
import math
from statistics import mean, stdev, covariance, correlation
import sys

BASE=Path(__file__).resolve().parent

def read_csv(name):
    with (BASE/name).open(encoding="utf8",newline="") as stream:
        return {int(r["Time"]):r for r in csv.DictReader(stream)}

def calculate():
    meta=json.loads((BASE/"provenance.json").read_text(encoding="utf8"))
    for name,info in meta["files"].items():
        assert hashlib.sha256((BASE/name).read_bytes()).hexdigest()==info["sha256"],name
    ensemble=read_csv("ensemble-original.csv")
    components=read_csv("component-original.csv")
    summary=read_csv("summary-original.csv")
    assert set(ensemble)==set(components)==set(summary)
    assert min(ensemble)==1850 and 2025 in ensemble
    r=ensemble[2024]
    values=[float(r[f"Realization {i}"]) for i in range(1,201)]
    previous=[float(ensemble[2023][f"Realization {i}"]) for i in range(1,201)]
    assert len(r)==203 and all(math.isfinite(v) for v in values+previous)
    estimate=mean(values)
    u_ensemble=stdev(values)
    u_coverage=float(r["Coverage uncertainty (1 sigma)"])
    u_total=math.hypot(u_ensemble,u_coverage)
    interval=[estimate-1.96*u_total,estimate+1.96*u_total]
    checks={
        "mean":(estimate,float(summary[2024]["Anomaly (deg C)"])),
        "ensemble_standard_deviation":(u_ensemble,float(components[2024]["Ensemble standard deviation (1 sigma)"])),
        "coverage":(u_coverage,float(components[2024]["Coverage uncertainty (1 sigma)"])),
        "total_standard_uncertainty":(u_total,float(components[2024]["Total uncertainty (1 sigma)"])),
        "lower_95":(interval[0],float(summary[2024]["Lower confidence limit (2.5%)"])),
        "upper_95":(interval[1],float(summary[2024]["Upper confidence limit (97.5%)"]))}
    comparison={k:dict(calculated=a,published=b,difference=a-b) for k,(a,b) in checks.items()}
    assert all(abs(v["difference"])<meta["rounding_tolerance_c"] for v in comparison.values())
    # Covariance preserved by keeping each realization's two years together.
    differences=[b-a for a,b in zip(previous,values)]
    cov=covariance(previous,values)
    paired_u=stdev(differences)
    from_cov=math.sqrt(stdev(previous)**2+u_ensemble**2-2*cov)
    assert math.isclose(paired_u,from_cov,abs_tol=1e-14)
    rows=[dict(realization=i,anomaly_2023_c=a,anomaly_2024_c=b,difference_c=b-a) for i,(a,b) in enumerate(zip(previous,values),1)]
    result=dict(version=meta["version"],year=2024,members=200,reference="1961-1990",mean_c=estimate,
                ensemble_standard_uncertainty_c=u_ensemble,coverage_standard_uncertainty_c=u_coverage,
                combined_standard_uncertainty_c=u_total,coverage_fraction=float(r["Fraction of area represented"]),
                expansion_factor=1.96,expanded_uncertainty_c=1.96*u_total,normal_95_interval_c=interval,
                published_comparison=comparison,
                pairing_2023_2024=dict(scope=meta["pairing_scope"],mean_difference_c=mean(differences),
                    standard_uncertainty_2023_c=stdev(previous),standard_uncertainty_2024_c=u_ensemble,
                    correlation=correlation(previous,values),covariance_c2=cov,
                    paired_difference_standard_uncertainty_c=paired_u,
                    covariance_formula_standard_uncertainty_c=from_cov,
                    independent_assumption_standard_uncertainty_c=math.hypot(stdev(previous),u_ensemble)))
    return rows,result

def outputs(rows,result):
    stream=io.StringIO(newline="")
    writer=csv.DictWriter(stream,fieldnames=list(rows[0]),lineterminator=chr(10))
    writer.writeheader();writer.writerows(rows)
    return {"realizations.csv":stream.getvalue().encode("utf8"),
            "results.json":(json.dumps(result,ensure_ascii=False,indent=2)+chr(10)).encode("utf8")}

if __name__=="__main__":
    rows,result=calculate()
    for name,data in outputs(rows,result).items():
        if "--write" in sys.argv:(BASE/name).write_bytes(data)
        else:assert (BASE/name).read_bytes()==data,name
    print("200 realizations checked. All reproduced official values agree within 1e-7 deg C.")
    print("2024 mean:",result["mean_c"],"deg C relative to 1961-1990")
    print("Combined standard uncertainty:",result["combined_standard_uncertainty_c"],"deg C")
    print("Approximate 95% interval:",result["normal_95_interval_c"])
    print("Paired ensemble uncertainty:",result["pairing_2023_2024"]["paired_difference_standard_uncertainty_c"])
