"""Fetch the exact source window. Requires requests and rasterio. No reprojection."""
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
    response = requests.get("https://planetarycomputer.microsoft.com/api/sas/v1/sign",
                            params={"href": url}, timeout=60)
    response.raise_for_status()
    with rasterio.Env(GDAL_DISABLE_READDIR_ON_OPEN="EMPTY_DIR",
                      CPL_VSIL_CURL_ALLOWED_EXTENSIONS=".TIF", GDAL_HTTP_TIMEOUT="60"):
        with rasterio.open(response.json()["href"]) as source:
            array = source.read(1, window=window)
            profile = source.profile
            profile.update(height=w["height"], width=w["width"],
                           transform=source.window_transform(window), compress="deflate")
            with rasterio.open(base / f"fresh-{name}.tif", "w", **profile) as target:
                target.write(array, 1)
    print(name, "downloaded")
