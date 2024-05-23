#!/usr/bin/env python
# coding: utf-8

# Copyright (c) QuantStack.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget, Widget, widget_serialization, HTML
from traitlets import Unicode, List, Instance, CFloat, Bool,Int, Float
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

class ImageOverLayer (DOMWidget):

   _model_name = Unicode('ImageOverLayerModel').tag(sync=True)
   _model_module = Unicode(module_name).tag(sync=True)
   _model_module_version = Unicode(module_version).tag(sync=True)
   _view_name = Unicode('ImageOverLayerView').tag(sync=True)
   _view_module = Unicode(module_name).tag(sync=True)
   _view_module_version = Unicode(module_version).tag(sync=True)

   image_url = Unicode('').tag(sync=True)
   image_bounds = List([0, 0]).tag(sync=True)


class Map(DOMWidget):
    _model_name = Unicode('MapModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('MapView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    value = Unicode('Hello World').tag(sync=True)
    center = List(def_loc).tag(sync=True, o=True)
    zoom = CFloat(2).tag(sync=True, o=True)
    layers = List(Instance(TileLayer)).tag(sync=True, **widget_serialization)
    OverLayers=List(Instance(ImageOverLayer)).tag(sync=True, **widget_serialization)

    title = Unicode('').tag(sync=True)
    zoom_slider = Bool(False).tag(sync=True)
    scale_line = Bool(False).tag(sync=True)
    full_screen = Bool(False).tag(sync=True)
    mouse_position= Bool(False).tag(sync=True)
    
    def __init__(self, center=None, zoom=None, **kwargs):
        super().__init__(**kwargs)
        
        if center is not None:
            self.center = center
        
        if zoom is not None:
            self.zoom = zoom

    def add_layer(self, layer):
        self.layers = self.layers + [layer]

    def add_Overlayer(self, Overlayer):
        self.OverLayers = self.OverLayers + [Overlayer]

    def remove_layer(self, layer):
        self.layers = [x for x in self.layers if x != layer]
    
    def remove_Overlayer(self, Overlayer):
        self.OverLayers = [x for x in self.OverLayers if x != Overlayer]

    def clear_layers(self):
        self.layers = []



