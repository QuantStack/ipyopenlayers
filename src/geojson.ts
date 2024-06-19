// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import { StyleFunction } from 'ol/style/Style';
import { DOMWidgetModel, ISerializers } from '@jupyter-widgets/base';
import 'ol/ol.css';
import { MODULE_NAME, MODULE_VERSION } from './version';
import '../css/widget.css';
import GeoJSON from 'ol/format/GeoJSON.js';
import { Circle as CircleStyle, Fill, Stroke, Style } from 'ol/style.js';
import { Vector as VectorSource } from 'ol/source.js';
import { Vector as VectorLayer } from 'ol/layer.js';
import { LayerModel, LayerView } from './layer';

export class OpenLayersGeoJSONModel extends LayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: OpenLayersGeoJSONModel.model_name,
      _model_module: OpenLayersGeoJSONModel.model_module,
      _model_module_version: OpenLayersGeoJSONModel.model_module_version,
      _view_name: OpenLayersGeoJSONModel.view_name,
      _view_module: OpenLayersGeoJSONModel.view_module,
      _view_module_version: OpenLayersGeoJSONModel.view_module_version,
      layers: [],
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'OpenLayersGeoJSONModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'OpenLayersGeoJSONView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class OpenLayersGeoJSONView extends LayerView {
  obj: VectorLayer<VectorSource>;
  render() {
    this.initVectorLayer();
    this.create_obj();
    this.modelEvents();
  }
  create_obj() {
    this.obj = this.vectorLayer;
  }
  initVectorLayer() {
    this.vectorSource = new VectorSource({
      features: new GeoJSON().readFeatures(this.model.get('data')),
    });
    this.vectorLayer = new VectorLayer({
      source: this.vectorSource,
      style: this.createStyleFunction(),
    });
  }

  createStyleFunction(): StyleFunction {
    const modelStyle = this.model.get('style') || {};
    return (feature) => {
      return new Style({
        stroke: new Stroke({
          color: modelStyle.strokeColor || '#3399CC',
          width: modelStyle.strokeWidth || 1.25,
        }),
        fill: new Fill({
          color: modelStyle.fillColor || 'rgba(255, 255, 255, 0.4)',
        }),
        image: new CircleStyle({
          radius: modelStyle.pointRadius || 5,
          fill: new Fill({
            color: modelStyle.pointFillColor || '#FF0000',
          }),
          stroke: new Stroke({
            color: modelStyle.pointStrokeColor || '#000000',
            width: modelStyle.pointStrokeWidth || 1,
          }),
        }),
      });
    };
  }

  updateStyle() {
    this.vectorLayer.setStyle(this.createStyleFunction());
  }

  invisibleStyle = new Style({
    fill: new Fill({ color: 'rgba(0, 0, 0, 0)' }),
    stroke: new Stroke({ color: 'rgba(0, 0, 0, 0)', width: 0 }),
  });
  updateVisibility() {
    const visibility = this.model.get('visible');
    this.vectorSource.getFeatures().forEach((feature) => {
      feature.setStyle(visibility ? undefined : this.invisibleStyle);
    });
  }
  updateData() {
    this.vectorSource.clear();
    this.vectorSource.addFeatures(
      new GeoJSON().readFeatures(this.model.get('data')),
    );
  }

  modelEvents() {
    this.listenTo(this.model, 'change:style', this.updateStyle);
    this.listenTo(this.model, 'change:data', this.updateData);
    this.listenTo(this.model, 'change:visible', this.updateVisibility);
  }
  vectorLayer: VectorLayer<VectorSource>;
  vectorSource: VectorSource;
}
