// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.

import {
  DOMWidgetModel,
  DOMWidgetView,
  WidgetModel,
  WidgetView,
  ISerializers,
  unpack_models,
  ViewList,
} from '@jupyter-widgets/base';

import { Map } from 'ol';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';
import XYZ from 'ol/source/XYZ';
import 'ol/ol.css';


import { MODULE_NAME, MODULE_VERSION } from './version';

// Import the CSS
import '../css/widget.css';

export class MapModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: MapModel.model_name,
      _model_module: MapModel.model_module,
      _model_module_version: MapModel.model_module_version,
      _view_name: MapModel.view_name,
      _view_module: MapModel.view_module,
      _view_module_version: MapModel.view_module_version,
      value: 'Hello World',
      layers: [],
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    layers: { deserialize: unpack_models },
    // Add any extra serializers here
  };

  static model_name = 'MapModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'MapView'; 
  static view_module = MODULE_NAME; 
  static view_module_version = MODULE_VERSION;
}

export class MapView extends DOMWidgetView {
  render() {
    this.el.classList.add('custom-widget');

    this.mapContainer = document.createElement('div');
    this.mapContainer.style.height = '500px';

    this.el.appendChild(this.mapContainer);

    this.layer_views = new ViewList(
      this.add_layer_model,
      this.remove_layer_view,
      this
    );

    this.layers_changed();
    this.model.on('change:layers', this.layers_changed, this);

    this.map = new Map({
      target: this.mapContainer,
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }

  layers_changed(){  
    const layers = this.model.get('layers') as TileLayerModel[];
    this.layer_views.update(layers);
  }

  remove_layer_view(child_view: TileLayerView) {
      this.map.removeLayer(child_view.tileLayer);
      child_view.remove();
  }

  async add_layer_model(child_model: TileLayerModel) {
    const view = await this.create_child_view<TileLayerView>(child_model, {
      map_view: this,
    });

    this.map.addLayer(view.tileLayer);

    this.displayed.then(() => {
      view.trigger('displayed', this);
    });
    return view;
  }

  mapContainer: HTMLDivElement;

  map: Map;

  layer_views: ViewList<TileLayerView>;
}




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
  render() {
    super.render();
    // TODO Support url setting
    const url= this.model.get('url')

    this.tileLayer = new TileLayer({
      source: new XYZ({
        url: url
      })
    });

    this.url_changed();
    this.model.on('change:url', this.url_changed, this);
  }

  url_changed() {
      const newUrl = this.model.get('url');
      if (newUrl) {
        const newSource = new XYZ({
          url: newUrl
        });
        this.tileLayer.setSource(newSource);
  
      }}  

  tileLayer: TileLayer<OSM>;


    // TODO Support url setting
   /*
    this.tileLayer = new TileLayer({
      source: new OSM(),
    });

    this.url_changed();
    this.model.on('change:url', this.url_changed, this);
  }

  url_changed() {
    // TODO React on url change!!
    const newUrl = this.model.get('url');
    if (newUrl) {
      const newSource = new XYZ({
        url: newUrl
      });

      this.tileLayer.setSource(newSource);
}
}
  tileLayer: TileLayer<OSM>;*/

}