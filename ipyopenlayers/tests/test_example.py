#!/usr/bin/env python
# coding: utf-8

# Copyright (c) QuantStack.
# Distributed under the terms of the Modified BSD License.

import pytest
from traitlets import TraitError  

from ..Map import Map, RasterTileLayer, GeoTIFFTileLayer, VectorTileLayer, GeoJSON, HeatmapLayer, ImageOverlay, VideoOverlay, PopupOverlay, ZoomSlider, FullScreen, ScaleLine, MousePosition

def test_example_creation_blank():
    w = Map()
    assert w.zoom == 0

def test_add_layer():
    m = Map()
    m.add_layer(RasterTileLayer())
    assert m.zoom == 0
    assert len(m.layers) == 1

def test_add_multiple_layers():
    m = Map()
    m.add_layer(RasterTileLayer())
    m.add_layer(GeoTIFFTileLayer())
    m.add_layer(VectorTileLayer())
    assert len(m.layers) == 3

def test_remove_layer():
    m = Map()
    layer = RasterTileLayer()
    m.add_layer(layer)
    assert len(m.layers) == 1
    m.remove_layer(layer)
    assert len(m.layers) == 0

def test_clear_layers():
    m = Map()
    m.add_layer(RasterTileLayer())
    m.add_layer(GeoTIFFTileLayer())
    m.add_layer(VectorTileLayer())
    assert len(m.layers) == 3
    m.clear_layers()
    assert len(m.layers) == 0

def test_add_overlay():
    m = Map()
    overlay = ImageOverlay()
    m.add_overlay(overlay)
    assert len(m.overlays) == 1

def test_remove_overlay():
    m = Map()
    overlay = ImageOverlay()
    m.add_overlay(overlay)
    assert len(m.overlays) == 1
    m.remove_overlay(overlay)
    assert len(m.overlays) == 0

def test_add_control():
    m = Map()
    control = ZoomSlider()
    m.add_control(control)
    assert len(m.controls) == 1

def test_remove_control():
    m = Map()
    control = ZoomSlider()
    m.add_control(control)
    assert len(m.controls) == 1
    m.remove_control(control)
    assert len(m.controls) == 0

def test_add_multiple_controls():
    m = Map()
    m.add_control(ZoomSlider())
    m.add_control(FullScreen())
    m.add_control(ScaleLine())
    m.add_control(MousePosition())
    assert len(m.controls) == 4

'''def test_initialize_with_center_and_zoom():
    center = [10.0, 20.0]
    zoom = 5
    m = Map(center=center, zoom=zoom)
    assert m.center == center
    assert m.zoom == zoom '''

def test_update_center():
    m = Map()
    new_center = [30.0, 40.0]
    m.center = new_center
    assert m.center == new_center

def test_update_zoom():
    m = Map()
    new_zoom = 10
    m.zoom = new_zoom
    assert m.zoom == new_zoom

def test_adding_invalid_layer_raises_error():
    m = Map()
    with pytest.raises(TraitError):
        m.add_layer("invalid layer")

def test_adding_invalid_overlay_raises_error():
    m = Map()
    with pytest.raises(TraitError):
        m.add_overlay("invalid overlay")

def test_adding_invalid_control_raises_error():
    m = Map()
    with pytest.raises(TraitError):
        m.add_control("invalid control")

