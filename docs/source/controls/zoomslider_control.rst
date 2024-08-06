Zoom Slider Control
===================


The Zoom Slider Control in `ipyopenlayers` provides a convenient slider interface for users to control the zoom level of the map.
This control enhances the user experience by allowing a more intuitive and precise adjustment of the zoom level.


Example
-------


.. jupyter-execute::


   from ipyopenlayers import Map, ZoomSlider


   # Create a map with initial zoom level and center coordinates
   m = Map(center=[0, 0], zoom=2)


   # Add a ZoomSlider control to the map
   zoom_slider = ZoomSlider()
   m.add_control(zoom_slider)


   # Display the map
   m




Attributes
----------


.. autoclass:: ipyopenlayers.openlayers.ZoomSlider
  :members:
