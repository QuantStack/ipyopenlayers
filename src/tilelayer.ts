// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import { WidgetModel, WidgetView, ISerializers } from '@jupyter-widgets/base';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import OSM from 'ol/source/OSM';
import { MODULE_NAME, MODULE_VERSION } from './version';
import { MapView } from './widget';

export class TileLayerModel extends WidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: TileLayerModel.model_name,
      _model_module: TileLayerModel.model_module,
      _model_module_version: TileLayerModel.model_module_version,
      _view_name: TileLayerModel.view_name,
      _view_module: TileLayerModel.view_module,
      _view_module_version: TileLayerModel.view_module_version,
      value: 'Hello World',
    };
  }

  static serializers: ISerializers = {
    ...WidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'TileLayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'TileLayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class TileLayerView extends WidgetView {
  map: MapView;
  render() {
    super.render();
    const url = this.model.get('url');

    this.tileLayer = new TileLayer({
      source: new XYZ({
        url: url,
      }),
    });

    this.urlChanged();
    this.model.on('change:url', this.urlChanged, this);
  }

  urlChanged() {
    const newUrl = this.model.get('url');
    if (newUrl) {
      const newSource = new XYZ({
        url: newUrl,
      });
      this.tileLayer.setSource(newSource);
    }
  }

  tileLayer: TileLayer<OSM>;
}
