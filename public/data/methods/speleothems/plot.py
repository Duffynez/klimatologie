"""Plot the recent Bu4 record. Requires matplotlib. Usage: python plot.py [output.svg]."""
import csv
import sys
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
sys.dont_write_bytecode = True
from reproduce import calculate

BASE = Path(__file__).resolve().parent
calculate()  # Verify unchanged source before plotting.
rows = list(csv.DictReader((BASE / "bu4-processed.csv").open(encoding="utf-8", newline="")))
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 17, "svg.fonttype": "none"})
fig, ax = plt.subplots(figsize=(6.8, 5.4), layout="constrained")
fig.patch.set_facecolor("#fbfcfd")
ax.set_facecolor("#fbfcfd")
age = [float(r["age_calBP"]) for r in rows]
raw = [float(r["d18O_VPDB_permil"]) for r in rows]
filtered = [r for r in rows if r["mean21_VPDB_permil"]]
ax.axvspan(351, 642.7, color="#f5c77c", alpha=.28, lw=0)
ax.plot(age, raw, color="#a7b0b7", lw=1.15, label="Jednotlivá měření", zorder=2)
ax.plot([float(r["age_calBP"]) for r in filtered], [float(r["mean21_VPDB_permil"]) for r in filtered],
        color="#166b86", lw=2.6, label="Průměr 21 vzorků", zorder=3)
ax.scatter([496.9], [-105.97/21], color="#bb5c18", s=65, zorder=5)
ax.set_xlim(2020, -80)
ax.set_ylim(-7.05, -4.45)
ax.set_xticks([2000,1500,1000,500,0])
ax.set_yticks([-7,-6.5,-6,-5.5,-5,-4.5])
ax.set_yticklabels(["−7,0","−6,5","−6,0","−5,5","−5,0","−4,5"])
ax.set_xlabel("Stáří (roky před rokem 1950)", labelpad=12)
ax.set_ylabel("δ¹⁸O (‰ VPDB)", labelpad=10)
ax.grid(True, color="#dce3e7", lw=.7, zorder=0)
for name in ("top","right"):ax.spines[name].set_visible(False)
ax.legend(loc="lower right",frameon=True,facecolor="#fbfcfd",framealpha=.95,fontsize=15)
output = Path(sys.argv[1]) if len(sys.argv)>1 else BASE / "bu4-record.svg"
fig.savefig(output, metadata={"Title":"Bunkerhöhle Bu4: jednotlivá měření a průměr 21 vzorků", "Description":"NOAA NCEI, DOI 10.25921/s829-3m55. Stáří je převzatý model, bez vykreslení jeho nejistoty. Vlastní zpracování Klimatologie.eu."})
text=output.read_text(encoding="utf-8").replace("'DejaVu Sans'", "'DejaVu Sans', Arial, sans-serif")
output.write_text("\n".join(line.rstrip() for line in text.splitlines())+"\n",encoding="utf-8")
print(output)
