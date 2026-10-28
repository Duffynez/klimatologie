"""Reproduce the PG1351 pollen example from the unchanged PANGAEA export.
Python 3. Use --plot for the optional Matplotlib figure.
Source: Andreev, Dietze & Herzschuh (2020), doi:10.1594/PANGAEA.915749.
"""
import csv
import hashlib
import io
import json
from pathlib import Path
import sys

BASE = Path(__file__).resolve().parent
original = (BASE / "pg1351-original.tsv").read_bytes()
metadata = json.loads((BASE / "provenance.json").read_text(encoding="utf-8"))
assert hashlib.sha256(original).hexdigest() == metadata["sha256"]["pg1351-original.tsv"], "Input changed"
text = original.decode("utf-8").split("*/", 1)[1].strip()
rows = list(csv.DictReader(io.StringIO(text), delimiter="\t"))
selected = sorted((r for r in rows if r["MIS"] in {"5e", "6"}), key=lambda r: float(r["Age [ka BP]"]))
assert len(rows) == 19 and len(selected) == 11
columns = ["sample_id", "mis", "age_ka_bp", "age_years_bp", "depth_m", "birch_dwarf_pct", "alder_pct", "poaceae_pct", "artemisia_pct", "grasses_artemisia_pct"]
output = []
for r in selected:
    age, depth = float(r["Age [ka BP]"]), float(r["Depth sed [m]"])
    birch, alder, grass, artemisia = (float(r[k]) for k in ["Bet.Se.N-T [%]", "Alnus [%]", "Poac [%]", "Artemisia [%]"])
    assert all(0 <= x <= 100 for x in (birch, alder, grass, artemisia))
    output.append([r["Sample ID"], r["MIS"], f"{age:.3f}", f"{age * 1000:.0f}", f"{depth:.3f}", f"{birch:.1f}", f"{alder:.1f}", f"{grass:.1f}", f"{artemisia:.1f}", f"{grass + artemisia:.1f}"])
with (BASE / "selected-pollen.csv").open("w", newline="", encoding="utf-8") as file:
    writer = csv.writer(file)
    writer.writerow(columns)
    writer.writerows(output)
by_id = {r[0]: r for r in output}
assert by_id["117"][-1] == "88.1" and by_id["109"][-1] == "2.9"
print("Published rows: 19. Selected rows: 11. Grass + Artemisia: 88.1% -> 2.9%.")

if "--plot" in sys.argv:
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    plt.rcParams.update({"font.family": "sans-serif", "font.sans-serif": ["Arial", "DejaVu Sans"], "font.size": 14, "svg.fonttype": "none", "svg.hashsalt": "pollen-pg1351"})
    fig, axes = plt.subplots(1, 3, figsize=(7.8, 6.8), dpi=100, sharey=True)
    fig.patch.set_facecolor("#f7f7f2")
    colors = ["#287d71", "#aa663b", "#536e93"]
    ages = [float(r[2]) for r in output]
    for ax, idx, title, color in zip(axes, [5, 6, 9], ["Břízy\nzakrslého typu", "Olše", "Trávy\na pelyňky"], colors):
        values = [float(r[idx]) for r in output]
        ax.set_facecolor("#ffffff")
        ax.plot(values, ages, "o-", color=color, linewidth=2, markersize=5)
        ax.fill_betweenx(ages, 0, values, color=color, alpha=.10)
        ax.set_xlim(0, 100)
        ax.set_xticks([0, 50, 100])
        ax.set_ylim(146, 116)
        ax.set_yticks([120, 125, 130, 135, 140, 145])
        ax.set_title(title, fontsize=15, pad=18, color="#193b3d")
        ax.grid(axis="y", alpha=.2)
        ax.spines[["right", "top"]].set_visible(False)
        ax.tick_params(labelsize=12)
    axes[0].set_ylabel("Stáří (tisíce let před rokem 1950)", fontsize=14, labelpad=10)
    fig.supxlabel("Podíl z původní pylové sumy (%)", y=.05, fontsize=15)
    fig.subplots_adjust(left=.15, right=.97, bottom=.15, top=.84, wspace=.19)
    fig.text(.15, .96, "Jezero Elgygytgyn · jádro PG1351", color="#193b3d", fontsize=17, weight="bold")
    fig.savefig(BASE / "elgygytgyn-pollen.svg", metadata={"Date": None, "Creator": "Klimatologie.eu, data doi:10.1594/PANGAEA.915749"})
