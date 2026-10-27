"""Plot the published crop. Requires numpy, matplotlib and rasterio."""
from pathlib import Path
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
import numpy as np
import rasterio

base = Path(__file__).resolve().parent
with rasterio.open(base / "aletsch-thermal.tif") as source:
    thermal = source.read()
with rasterio.open(base.parent / "optical-imaging/aletsch-20230820.tif") as source:
    optical = source.read()
rgb = np.moveaxis(optical[[2, 1, 0]] * 0.0000275 - 0.2, 0, -1)
rgb = np.sqrt(np.clip(rgb / 0.65, 0, 1))
temperature = thermal[0] * 0.00341802 + 149 - 273.15
valid = (thermal[0] != 0) & ((thermal[8] & 31) == 0) & (thermal[9] == 0)
temperature = np.ma.array(temperature, mask=~valid)
fig, axes = plt.subplots(1, 2, figsize=(9, 8.1), layout="constrained")
axes[0].imshow(rgb)
cmap = plt.colormaps["plasma"].copy()
cmap.set_bad("#d9dfe2")
im = axes[1].imshow(temperature, cmap=cmap, vmin=-10, vmax=50)
for ax, title in zip(axes, ["Odražené světlo", "Teplota povrchu"]):
    ax.set_title(title, fontsize=15, pad=12)
    ax.plot(290, 550, "o", ms=9, mfc="none", mec="black", mew=2)
    ax.annotate("C", (290, 550), xytext=(-25, -18), textcoords="offset points",
                color="black", fontsize=16, weight="bold",
                bbox=dict(facecolor="white", alpha=.85, edgecolor="none", pad=2))
    ax.set_xticks([])
    ax.set_yticks([])
axes[0].plot([20, 86.667], [575, 575], color="white", lw=4)
axes[0].text(20, 564, "2 km", color="white", fontsize=12)
cb = fig.colorbar(im, ax=axes[1], location="bottom", shrink=.95, pad=.025)
cb.set_label("Teplota povrchu (°C)", fontsize=12)
fig.suptitle("Aletsch a okolí · Landsat 8 · 20. srpna 2023", fontsize=16)
out = base.parents[2] / "media/infrared-radiometry/temperature-map.png"
fig.savefig(out, dpi=160, facecolor="white")
print(out)
