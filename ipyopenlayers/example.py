#!/usr/bin/env python
# coding: utf-8

# Copyright (c) QuantStack.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget, Widget, widget_serialization
from traitlets import Unicode, List, Instance, Enum,default, CFloat
from ._frontend import module_name, module_version
def_loc = [0.0, 0.0]

class TileLayer(Widget):

    _model_name = Unicode('TileLayerModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('TileLayerView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    url = Unicode('https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png').tag(sync=True)
   

class Map(DOMWidget):
    """TODO: Add docstring here
    """
    

    _model_name = Unicode('MapModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('MapView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    value = Unicode('Hello World').tag(sync=True)
    center = List(def_loc).tag(sync=True, o=True)
    zoom = CFloat(12).tag(sync=True, o=True)
    layers = List(Instance(TileLayer)).tag(sync=True, **widget_serialization)
    
    def __init__(self, center=None, zoom=None, **kwargs):
        super().__init__(**kwargs)
        
        if center is not None:
            self.center = center
        
        if zoom is not None:
            self.zoom = zoom

    def add_layer(self, layer):
        # Copy layers (workaround ipywidgets issue)
        self.layers = self.layers + [layer]

    def remove_layer(self, layer):
        self.layers = [x for x in self.layers if x != layer]

    def clear_layers(self):
        self.layers = []









class Control(Widget):

    _view_name = Unicode("OpenLayersControlView").tag(sync=True)
    _model_name = Unicode("OpenLayersControlModel").tag(sync=True)
    _view_module = Unicode("jupyter-openlayers").tag(sync=True)
    _model_module = Unicode("jupyter-openlayers").tag(sync=True)

    options = List(trait=Unicode()).tag(sync=True)

    position = Enum(
        ["topright", "topleft", "bottomright", "bottomleft"],
        default_value="topleft",
        help="""Possible values are topleft, topright, bottomleft
                or bottomright""",
    ).tag(sync=True, o=True)

    @default("options")
    def _default_options(self):
        return [name for name in self.traits(o=True)]


class ZoomControl(Control):

    _view_name = Unicode("OpenLayersZoomControlView").tag(sync=True)
    _model_name = Unicode("OpenLayersZoomControlModel").tag(sync=True)

    zoom_in_text = Unicode("+").tag(sync=True, o=True)
    zoom_in_title = Unicode("Zoom in").tag(sync=True, o=True)
    zoom_out_text = Unicode("-").tag(sync=True, o=True)
    zoom_out_title = Unicode("Zoom out").tag(sync=True, o=True)
        

    
            
        
