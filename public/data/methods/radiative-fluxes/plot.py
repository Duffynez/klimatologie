"""Plot the measured hour. Requires matplotlib. Run beside reproduce.py."""
from pathlib import Path
from datetime import datetime
import matplotlib.pyplot as plt
import matplotlib.dates as mdates
from reproduce import calculate

rows, summary = calculate()
times = [datetime.fromisoformat(r["end_utc"].replace("Z", "+00:00")) for r in rows]
plt.rcParams.update({"font.family": "DejaVu Sans", "font.size": 13})
fig, axes = plt.subplots(2, 1, figsize=(9, 7), sharex=True, constrained_layout=True)
for key, label, color in [
    ("sw_down_W_m2", "Sluneční záření dolů", "#b95c0c"),
    ("sw_up_W_m2", "Sluneční záření vzhůru", "#d4a320"),
    ("lw_down_W_m2", "Tepelné záření dolů", "#2677a0"),
    ("lw_up_W_m2", "Tepelné záření vzhůru", "#8b527b"),
]:
    axes[0].plot(times, [r[key] for r in rows], color=color, label=label, lw=1.7)
axes[0].legend(loc="upper left", fontsize=11, ncol=2)
axes[0].set_ylim(0, 1500)
axes[1].plot(times, [r["net_W_m2"] for r in rows], color="#246254", lw=2)
axes[1].axhline(summary["means"]["net_W_m2"], color="#246254", ls="--", lw=1)
axes[1].text(0.02, 0.93, "Výsledná radiační bilance\nČárkovaně hodinový průměr 658 W/m²",
             transform=axes[1].transAxes, va="top", fontsize=12)
for ax in axes:
    ax.set_ylabel("Tok záření (W/m²)")
    ax.grid(alpha=0.18)
    ax.spines[["top", "right"]].set_visible(False)
axes[1].set_ylim(0, 1100)
axes[1].xaxis.set_major_locator(mdates.MinuteLocator(byminute=[0, 15, 30, 45]))
axes[1].xaxis.set_major_formatter(mdates.DateFormatter("%H:%M"))
axes[1].set_xlabel("21. června 2023, čas UTC (konec měřené minuty)")
fig.suptitle("Table Mountain, Colorado · 18:00–19:00 UTC", fontsize=16)
output = Path(__file__).resolve().parent / "hour.png"
fig.savefig(output, dpi=160)
print(output)
