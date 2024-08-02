#!/usr/bin/env python
# coding: utf-8

# Copyright (c) QuantStack.
# Distributed under the terms of the Modified BSD License.

"""
TODO: Add module docstring
"""
from ipywidgets import DOMWidget, Widget, widget_serialization
from traitlets import Unicode, List, Instance, CFloat, Bool, Dict, Int, Float
from ._frontend import module_name, module_version

def_loc = [0.0, 0.0]


class Layer(Widget):

    _model_name = Unicode('LayerModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('LayerView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

class TileLayer(Layer):

    url = Unicode('https://{a-c}.tile.openstreetmap.org/{z}/{x}/{y}.png').tag(sync=True)
    attribution = Unicode("").tag(sync=True)
    opacity = Float(1.0, min=0.0, max=1.0).tag(sync=True)
    visible = Bool(True).tag(sync=True)
    min_zoom = Int(0).tag(sync=True)
    max_zoom = Int(18).tag(sync=True)
    source_format = Dict().tag(sync=True)
    
class GeoTIFFTileLayer(Layer):
   _model_name = Unicode('GeoTIFFTileLayerModel').tag(sync=True)
   _view_name = Unicode('GeoTIFFTileLayerView').tag(sync=True)
   url = Unicode('').tag(sync=True)


class RasterTileLayer(TileLayer):

    _view_name = Unicode('RasterTileLayerView').tag(sync=True)
    _model_name = Unicode('RasterTileLayerModel').tag(sync=True)


class VectorTileLayer(TileLayer):

    _view_name = Unicode('VectorTileLayerView').tag(sync=True)
    _model_name = Unicode('VectorTileLayerModel').tag(sync=True)
    style = Dict({}).tag(sync=True)  

class GeoJSON(Layer):

    _view_name = Unicode('OpenLayersGeoJSONView').tag(sync=True)
    _model_name = Unicode('OpenLayersGeoJSONModel').tag(sync=True)
    data = Dict({}).tag(sync=True)
    style = Dict({}).tag(sync=True)
    visible = Bool(True).tag(sync=True)


class HeatmapLayer(Layer):
    _view_name = Unicode('HeatmapLayerView').tag(sync=True)
    _model_name = Unicode('HeatmapLayerModel').tag(sync=True)
    points= List([]).tag(sync=True)
    blur =Int(15).tag(sync=True)
    radius = Int(8).tag(sync=True)

class BaseOverlay(DOMWidget): 
   
   _model_module = Unicode(module_name).tag(sync=True)
   _model_module_version = Unicode(module_version).tag(sync=True)
   _view_module = Unicode(module_name).tag(sync=True)
   _view_module_version = Unicode(module_version).tag(sync=True)
   position = List([0, 0]).tag(sync=True)

class ImageOverlay (BaseOverlay):
   _view_name = Unicode('ImageOverlayView').tag(sync=True)
   _model_name = Unicode('ImageOverlayModel').tag(sync=True)

   image_url = Unicode('').tag(sync=True)

class VideoOverlay (BaseOverlay):
   _view_name = Unicode('VideoOverlayView').tag(sync=True)
   _model_name = Unicode('VideoOverlayModel').tag(sync=True)
   
   video_url = Unicode('').tag(sync=True)

class PopupOverlay (BaseOverlay):
   _view_name = Unicode('PopupOverlayView').tag(sync=True)
   _model_name = Unicode('PopupOverlayModel').tag(sync=True)
   
   popup_content = Unicode('').tag(sync=True)

class BaseControl(DOMWidget):
   _model_module = Unicode(module_name).tag(sync=True)
   _model_module_version = Unicode(module_version).tag(sync=True)
   _view_module = Unicode(module_name).tag(sync=True)
   _view_module_version = Unicode(module_version).tag(sync=True)
   
class ZoomSlider(BaseControl):
   _view_name = Unicode('ZoomSliderView').tag(sync=True)
   _model_name = Unicode('ZoomSliderModel').tag(sync=True)
   
class FullScreen(BaseControl):
    _view_name = Unicode('FullScreenView').tag(sync=True)
    _model_name = Unicode('FullScreenModel').tag(sync=True)


class ScaleLine(BaseControl):
    _view_name = Unicode('ScaleLineView').tag(sync=True)
    _model_name = Unicode('ScaleLineModel').tag(sync=True)



class MousePosition(BaseControl):
    _view_name = Unicode('MousePositionView').tag(sync=True)
    _model_name = Unicode('MousePositionModel').tag(sync=True)

class SplitMapControl(BaseControl):
    _model_name = Unicode('SplitMapControlModel').tag(sync=True)
    _view_name = Unicode('SplitMapControlView').tag(sync=True)
    left_layer = Instance(Layer).tag(sync=True, **widget_serialization)
    right_layer = Instance(Layer).tag(sync=True, **widget_serialization)
    swipe_position = Int(50).tag(sync=True)



class Map(DOMWidget):
    _model_name = Unicode('MapModel').tag(sync=True)
    _model_module = Unicode(module_name).tag(sync=True)
    _model_module_version = Unicode(module_version).tag(sync=True)
    _view_name = Unicode('MapView').tag(sync=True)
    _view_module = Unicode(module_name).tag(sync=True)
    _view_module_version = Unicode(module_version).tag(sync=True)

    center = List(def_loc).tag(sync=True, o=True)
    zoom = CFloat(2).tag(sync=True, o=True)
    layers = List(Instance(Layer)).tag(sync=True, **widget_serialization)
    overlays=List(Instance(BaseOverlay)).tag(sync=True, **widget_serialization)
    controls=List(Instance(BaseControl)).tag(sync=True, **widget_serialization)


    def __init__(self, center=None, zoom=None, **kwargs):
        super().__init__(**kwargs)
        
        if center is not None:
            self.center = center
        if zoom is not None:
            self.zoom = zoom

    def add_layer(self, layer):
        self.layers = self.layers + [layer]

    def add_overlay(self, overlay):
        self.overlays = self.overlays + [overlay]

    def remove_layer(self, layer):
        self.layers = [x for x in self.layers if x != layer]
    
    def remove_overlay(self, overlay):
        self.overlays = [x for x in self.overlays if x != overlay]

    def add_control(self, control):
        self.controls = self.controls + [control]

    def remove_control(self, control):
        self.controls = [x for x in self.controls if x != control]
    

    def clear_layers(self):
        self.layers = []



        