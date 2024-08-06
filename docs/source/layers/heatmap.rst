HeatmapLayer
============

The `HeatmapLayer` class in `ipyopenlayers` allows you to visualize data using a heatmap. This layer type is particularly useful for displaying density or intensity of data points on a map. The heatmap layer can be customized with various properties such as blur, radius, and the list of data points.

Key Features
------------

- **Data Visualization**: Represents data points as a heatmap, where the intensity of color corresponds to the density or value of the data points.
- **Customizable Appearance**: Adjust the blur and radius of the heatmap to fine-tune its appearance.
- **Dynamic Updates**: Update the heatmap dynamically as the data points or styling properties change.

Example
-------

Below is an example of how to use the `HeatmapLayer` class to add a heatmap to your `ipyopenlayers` map:

.. jupyter-execute::

    from ipyopenlayers import Map, HeatmapLayer

    # Create a map centered at coordinates [0, 0] with zoom level 0
    m = Map(center=[1.9700427801608893, 46.241720565969274], zoom=4)

    # Define data points for the heatmap: [latitude, longitude, weight]
    data_points = [
    [42.3656, 9.1493, 16.79],  # Haute-Corse
    [43.4527, 6.2649, 16.28],  # Var
    [43.6043, 5.0123, 15.93],  # Bouches-du-Rhône
    [42.6987, 2.8956, 15.87],  # Pyrénées-Orientales
    [43.6119, 3.8772, 15.81],  # Hérault
    [41.9264, 8.7364, 15.64],  # Corse-du-Sud
    [44.8378, -0.5792, 15.28],  # Gironde
    [43.8914, -1.2200, 15.2],  # Landes
    [43.9493, 4.8055, 15.17],  # Vaucluse
    [44.1004, 1.3555, 14.85],  # Tarn-et-Garonne
    [44.3058, 0.6283, 14.85],  # Lot-et-Garonne
    [43.6045, 1.4442, 14.75],  # Haute-Garonne
    [43.9074, 4.5079, 14.65],  # Gard
    [43.6205, 0.5898, 14.52],  # Gers
    [43.7102, 7.2620, 14.41],  # Alpes-Maritimes
    [45.7515, -0.6331, 14.34],  # Charente-Maritime
    [44.6144, 1.9023, 14.05],  # Lot
    [43.6043, 2.2344, 13.88],  # Tarn
    [43.1566, 2.3605, 13.88],  # Aude
    [43.2998, -0.3674, 13.85],  # Pyrénées-Atlantiques
    ]

    # Create a HeatmapLayer with specified blur, radius, and data points
    heatmap_layer = HeatmapLayer(
        points=data_points,
        blur=20,
        radius=15
    )

    # Add the HeatmapLayer to the map
    m.add_layer(heatmap_layer)

    # Display the map
    m


Attributes
----------

.. autoclass:: ipyopenlayers.openlayers.HeatmapLayer
   :members:
