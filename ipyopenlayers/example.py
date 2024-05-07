#!/usr/bin/env python
# coding: utf-8

# Copyright (c) QuantStack.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""

from ipywidgets import DOMWidget, Widget, widget_serialization
from traitlets import Unicode, List, Instance
from ._frontend import module_name, module_version


class TileLayer(Widget):

    _model_name = Unicode('TileLayerModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('TileLayerView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)
    url = Unicode('https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png').tag(sync=True)

    def __init__(self, **kwargs):
        super().__init__(**kwargs)
        self.observe(self._on_url_change, 'url')

    def _on_url_change(self, change):
        if 'new' in change:
            new_url = change['new']
            print('1')
            self.send({'event': 'url_changed', 'new_url': new_url})
            

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

    layers = List(Instance(TileLayer)).tag(sync=True, **widget_serialization)
    
    def add_layer(self, layer):
        # Copy layers (workaround ipywidgets issue)
        self.layers = self.layers + [layer]

    def remove_layer(self, layer):
        self.layers = [x for x in self.layers if x != layer]

    def substitute(self, old, new):
        if old.model_id not in self._layer_ids:
            print("Could not substitute layer: layer not in layergroup.")
        self.layers = tuple(
            [new if layer.model_id == old.model_id else layer for layer in self.layers]
        )


    def clear_layer(self):
        self.layers = []

        

    
            
        
