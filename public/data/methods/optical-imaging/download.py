"""Fetch the exact source windows again from Microsoft Planetary Computer.
Requires requests, numpy, rasterio. Run beside example.json.
No account is needed. Public temporary SAS URLs remain in memory only.
Outputs fresh-<band>.tif, without replacing the article's saved data.
"""
import json
from pathlib import Path
import requests
import rasterio
from rasterio.windows import Window

base = Path(__file__).resolve().parent
meta = json.loads((base / "example.json").read_text(encoding="utf-8"))
w = meta["window"]
window = Window(w["window_col"], w["window_row"], w["width"], w["height"])
for name, url in meta["assets"].items():
    response = requests.get("https://planetarycomputer.microsoft.com/api/sas/v1/sign", params={"href": url}, timeout=60)
    if response.status_code != 200:
        raise RuntimeError(f"Signing failed for {name}: HTTP {response.status_code}")
    signed = response.json()["href"]
    with rasterio.Env(GDAL_DISABLE_READDIR_ON_OPEN="EMPTY_DIR", CPL_VSIL_CURL_ALLOWED_EXTENSIONS=".TIF", GDAL_HTTP_TIMEOUT="60"):
        with rasterio.open(signed) as ds:
            array = ds.read(1, window=window)
            profile = ds.profile
            profile.update(height=w["height"], width=w["width"], transform=ds.window_transform(window), compress="deflate")
            with rasterio.open(base / f"fresh-{name}.tif", "w", **profile) as out:
                out.write(array, 1)
    print(name, "downloaded")
