"""Reproduce the Klimatologie.eu Bemis (1998) calibration example.
Python 3.10+, standard library. Optional --plot needs matplotlib.
Original data: https://doi.org/10.25921/0n13-nf40
Equation 1: https://doi.org/10.1029/98PA00070
The NOAA dc-dw column already contains the water convention adjustment.
The data are calibration inputs, NOT independent validation data.
"""
import argparse
import csv
import hashlib
import json
from collections import defaultdict
from pathlib import Path
from statistics import mean


def reproduce(base):
    metadata = json.loads((base / "provenance.json").read_text(encoding="utf-8"))
    for name, expected in metadata["sha256"].items():
        actual = hashlib.sha256((base / name).read_bytes()).hexdigest()
        if actual != expected:
            raise ValueError(f"Original input hash mismatch: {name}")
    with (base / "bemis1998-original.txt").open(encoding="latin-1", newline="") as handle:
        original = list(csv.DictReader(handle, delimiter="\t"))
    selected = []
    for source_row, row in enumerate(original, start=1):
        if all(row[key] == value for key, value in metadata["selection"].items()):
            bath = float(row["T(\u00b0C)"])
            difference = float(row["dc-dw (VPDB)"])
            reconstructed = 16.5 - 4.80 * difference
            selected.append((source_row, bath, difference, reconstructed, reconstructed - bath))
    if len(original) != 135 or len(selected) != 39:
        raise ValueError("Unexpected input or selection size")
    groups = defaultdict(list)
    for row in selected:
        groups[row[1]].append(row[2])
    means = [(bath, len(ds), mean(ds), 16.5 - 4.80 * mean(ds))
             for bath, ds in sorted(groups.items())]
    with (base / "selected-results.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle, lineterminator="\n")
        writer.writerow(["source_data_row", "bath_temperature_C", "delta_difference_per_mille",
                         "reconstructed_temperature_C", "residual_C"])
        for number, bath, difference, result, residual in selected:
            writer.writerow([number, f"{bath:g}", f"{difference:.2f}", f"{result:.6f}", f"{residual:.6f}"])
    with (base / "group-means.csv").open("w", encoding="utf-8", newline="") as handle:
        writer = csv.writer(handle, lineterminator="\n")
        writer.writerow(["bath_temperature_C", "n", "mean_delta_difference_per_mille",
                         "mean_reconstructed_temperature_C"])
        for bath, n, d, result in means:
            writer.writerow([f"{bath:g}", n, f"{d:.12f}", f"{result:.12f}"])
    rmse = (sum(row[4] ** 2 for row in selected) / len(selected)) ** 0.5
    print(f"Original rows: {len(original)}, selected: {len(selected)}")
    for bath, n, d, result in means:
        print(f"Bath {bath:g} C, n={n}, mean D={d:.6f} per mille, T={result:.6f} C")
    print(f"In-sample RMSE: {rmse:.6f} C (not independent validation)")
    return selected, means


def plot(selected, means, target):
    import matplotlib
    matplotlib.use("Agg")
    import matplotlib.pyplot as plt
    from matplotlib.lines import Line2D
    plt.rcParams.update({"font.family": "Arial", "font.size": 20,
                         "svg.fonttype": "none", "svg.hashsalt": "bemis1998-klimatologie"})
    fig, ax = plt.subplots(figsize=(7.6, 6.4), dpi=100)
    fig.patch.set_facecolor("#f6f6f2")
    ax.set_facecolor("#ffffff")
    ax.plot([14, 27], [14, 27], color="#73878b", linewidth=1.8, zorder=1)
    ax.scatter([r[1] for r in selected], [r[3] for r in selected], s=58,
               facecolors="none", edgecolors="#246569", linewidths=1.6, zorder=2)
    ax.scatter([r[0] for r in means], [r[3] for r in means], s=58,
               marker="s", color="#bf563d", zorder=3)
    ax.set(xlim=(14, 27), ylim=(14, 27), xticks=[15, 17, 19, 21, 23, 25, 27],
           yticks=[15, 17, 19, 21, 23, 25, 27],
           xlabel="Teplota lázně (°C)", ylabel="Teplota z izotopů (°C)")
    ax.grid(alpha=0.17)
    ax.spines[["top", "right"]].set_visible(False)
    handles = [Line2D([], [], marker="o", color="#246569", markerfacecolor="none", linestyle="", label="Jedno měření"),
               Line2D([], [], marker="s", color="#bf563d", linestyle="", label="Průměr"),
               Line2D([], [], color="#73878b", label="Shoda")]
    fig.legend(handles=handles, loc="upper center", bbox_to_anchor=(0.54, 0.995),
               ncol=3, frameon=False, fontsize=16, handlelength=1.2, columnspacing=0.8)
    fig.subplots_adjust(left=0.16, bottom=0.14, right=0.97, top=0.88)
    target.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(target, format="svg", metadata={"Date": None,
                 "Title": "Bemis 1998: teploty 39 kalibračních vzorků",
                 "Description": "O. universa, slabé osvětlení, 171 mikromolů uhličitanových iontů na kilogram. Čára označuje shodu, nejde o nezávislé ověření."})
    plt.close(fig)
    # Keep SVG clean and deterministic across platforms.
    text = target.read_text(encoding="utf-8")
    target.write_text("\n".join(line.rstrip() for line in text.splitlines()) + "\n", encoding="utf-8", newline="\n")


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--plot", type=Path, help="Optional destination for the SVG graph")
    args = parser.parse_args()
    selected, means = reproduce(Path(__file__).resolve().parent)
    if args.plot:
        plot(selected, means, args.plot)
