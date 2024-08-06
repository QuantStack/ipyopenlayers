Popup Overlay
=============

The `PopupOverlay` class in `ipyopenlayers` allows you to create and manage popups on your map. Popups are useful for displaying additional information, annotations, or interactive elements when a specific point on the map is clicked or hovered over. The `PopupOverlay` class provides options to specify the position of the popup and its content.

Key Features
------------

- **Informative**: Display additional information or annotations at specific points on the map.
- **Interactive**: Popups can contain HTML content, making them highly customizable and interactive.
- **Dynamic Updates**: The content and position of the popup can be updated dynamically, allowing for interactive and responsive map displays.

Example
-------

Below is an example of how to use the `PopupOverlay` class to add a popup to your `ipyopenlayers` map:

.. jupyter-execute::

    from ipyopenlayers import Map, TileLayer, PopupOverlay

    # Create a map centered at coordinates [0.0, 0.0] with zoom level 2
    m = Map(center=[0.0, 0.0], zoom=2)
    
    # Display the map
    display(m)

    # Create a PopupOverlay and set its position and content
    popup = PopupOverlay(position=[48.8566, 2.3522], popup_content = 'France')

    # Add the PopupOverlay to the map
    m.add_overlay(popup)

Attributes
----------

.. autoclass:: ipyopenlayers.openlayers.PopupOverlay
   :members:

