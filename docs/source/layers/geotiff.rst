GeoTIFF Tile Layer
==================

The `GeoTIFFTileLayer` class in `ipyopenlayers` provides a way to display GeoTIFF files on your map. GeoTIFF is a format for raster graphics that includes georeferencing information, which makes it ideal for displaying satellite imagery and other geospatial raster data.

The `GeoTIFFTileLayer` class leverages WebGL for rendering, allowing for efficient handling of large raster datasets.

Key Features
------------

- **GeoTIFF Support**: Easily integrate GeoTIFF files into your map.
- **WebGL Rendering**: Utilizes WebGL for efficient rendering of large raster datasets.
- **Dynamic Updates**: Update the layer dynamically by changing the URL.

Example
-------
Below is an example of how to use the `GeoTIFFTileLayer` class to add a GeoTIFF layer to your map:

.. code-block:: python

    from ipyopenlayers import Map, GeoTIFFTileLayer,RasterTileLayer

    # Create a map centered at the specified coordinates with a zoom level of 9
    m = Map(center=[5.314329221346643, 16.3625002926901], zoom=9)

    # Add layer
   layer=RasterTileLayer()
   m.add_layer(layer)

    # Create and add a GeoTIFFTileLayer to the map
    geo_tiff_layer = GeoTIFFTileLayer(url='https://sentinel-cogs.s3.us-west-2.amazonaws.com/sentinel-s2-l2a-cogs/36/Q/WD/2020/7/S2A_36QWD_20200701_0_L2A/TCI.tif')
    m.add_layer(geo_tiff_layer)

    # Display the map
    m


Attributes
----------

.. autoclass:: ipyopenlayers.openlayers.GeoTIFFTileLayer
   :members:
