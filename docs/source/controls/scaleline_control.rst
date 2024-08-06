Scaleline Control
=================


The Scaleline Control in `ipyopenlayers` displays a scale line on the map, providing users with a visual reference for the map's scale. This helps users to understand the distances represented on the map at the current zoom level.


Example
-------


.. jupyter-execute::


   from ipyopenlayers import Map, ScaleLine


   # Create a map with initial zoom level and center coordinates
   m = Map(center=[0, 0], zoom=2)


   # Add a ScalelineControl to the map
   scaleline_control = ScaleLine()
   m.add_control(scaleline_control)


   # Display the map
   m




Attributes
----------


.. autoclass:: ipyopenlayers.openlayers.ScaleLine
  :members:
