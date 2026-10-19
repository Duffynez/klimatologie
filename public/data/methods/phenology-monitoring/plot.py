"""Plot the preserved observations. Requires matplotlib. Run beside reproduce.py."""
import json
from datetime import date
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from reproduce import calculate

plt.rcParams.update({"font.size": 12})
root = Path(__file__).resolve().parent
result, _, _ = calculate()
rows = json.loads((root / "harvard-leaves.json").read_text(encoding="utf-8"))
fig, ax = plt.subplots(figsize=(10, 4.4), layout="constrained")
fig.patch.set_facecolor("#ffffff")
for y, plant in enumerate(reversed(result["plants"])):
    visits = [r for r in rows if r["individual_id"] == plant["individualId"]
              and "2016-04-20" <= r["observation_date"] <= "2016-05-18"]
    for status, marker, color, label in [(0, "x", "#636b70", "Ne – rozvinuté listy nezjištěny"),
                                         (1, "o", "#177764", "Ano – rozvinuté listy přítomny")]:
        dates = [date.fromisoformat(r["observation_date"]) for r in visits if r["phenophase_status"] == status]
        ax.scatter(dates, [y] * len(dates), marker=marker, s=42, color=color,
                   label=label if y == 0 else None, zorder=3)
    ax.plot([date.fromisoformat(plant["lastNo"]), date.fromisoformat(plant["firstYes"])],
            [y, y], color="#bd701a", linewidth=6, solid_capstyle="butt", zorder=2,
            label="Rozmezí nástupu fáze" if y == 0 else None)
ax.set_yticks(range(3), [str(p["individualId"]) for p in reversed(result["plants"])])
ax.set_ylabel("Identifikátor stromu")
ax.set_ylim(-0.45, 2.5)
ax.set_xlim(date(2016, 4, 19), date(2016, 5, 19))
ax.xaxis.set_major_locator(mdates.DayLocator(interval=4))
ax.xaxis.set_major_formatter(mdates.DateFormatter("%d. %m."))
ax.set_xlabel("Datum návštěvy v roce 2016")
ax.set_title("Rozvinuté listy tří javorů v Harvard Forest", loc="left", fontsize=15, pad=16)
ax.grid(axis="x", color="#e5e8e7")
ax.spines[["top", "right"]].set_visible(False)
ax.legend(loc="upper center", bbox_to_anchor=(0.5, -0.25), frameon=False, ncol=1, fontsize=12)
fig.savefig(root / "leaf-onset.png", dpi=180)
print(root / "leaf-onset.png")
