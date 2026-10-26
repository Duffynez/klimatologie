"""Recreate excluded-glaciers.tif from the exact upstream outline files.

Run next to example.json and DEM_2009_ref.tif. Downloads ten outline files
to upstream-outlines/. Dependencies: rasterio, pyshp, pyproj, shapely, numpy.
The output is a byte-for-byte pixel comparison with the published mask, if present.
GeoTIFF compression/library versions can change the file hash without changing pixels.
"""
from pathlib import Path
import json
from urllib.request import urlopen
import numpy as np
import rasterio
from rasterio.features import rasterize
import shapefile
from shapely.geometry import shape, mapping, box
from shapely.ops import transform
from pyproj import Transformer

base = Path(__file__).resolve().parent
meta = json.loads((base/'example.json').read_text(encoding='utf-8'))
dest = base/'upstream-outlines'
dest.mkdir(exist_ok=True)
with rasterio.open(base/'DEM_2009_ref.tif') as ds:
    profile, affine, bounds = ds.profile, ds.transform, ds.bounds
project = Transformer.from_crs(32633, 25833, always_xy=True).transform
polygons = []
for year in ['1990','2010']:
    stem = f'CryoClim_GAO_SJ_{year}'
    for extension in ['cpg','dbf','prj','shp','shx']:
        name = f'{stem}.{extension}'
        url = meta['upstream_root']+'data/Longyearbyen/glacier_mask/'+name
        with urlopen(url, timeout=90) as response:
            (dest/name).write_bytes(response.read())
    for item in shapefile.Reader(str(dest/(stem+'.shp'))).iterShapeRecords():
        geom = transform(project, shape(item.shape.__geo_interface__))
        if geom.intersects(box(*bounds)):
            polygons.append(geom.buffer(100))
mask = rasterize([(mapping(g),1) for g in polygons],
                 out_shape=(profile['height'],profile['width']), transform=affine)
published = base/'excluded-glaciers.tif'
if published.exists():
    with rasterio.open(published) as ds:
        assert np.array_equal(mask, ds.read(1)), 'Mask pixels differ'
    print('All mask pixels agree with the published file.')
else:
    profile.update(dtype='uint8', nodata=None, count=1, compress='deflate')
    with rasterio.open(published,'w',**profile) as ds:
        ds.write(mask,1)
    print('Created excluded-glaciers.tif')
