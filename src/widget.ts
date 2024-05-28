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
import '../css/widget.css';
import { useGeographic } from 'ol/proj';
import Overlay from 'ol/Overlay';
import ImageLayer from 'ol/layer/Image';
import ImageSource from 'ol/source/Image';
import ImageStatic from 'ol/source/ImageStatic';

const DEFAULT_LOCATION = [0.0, 0.0];

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
      zoom: 2,
      center: DEFAULT_LOCATION,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    layers: { deserialize: unpack_models },
    over_layers: { deserialize: unpack_models },
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
    useGeographic();
    this.el.classList.add('custom-widget');

    this.mapContainer = document.createElement('div');
    this.mapContainer.style.height = '500px';
    this.el.appendChild(this.mapContainer);

    this.layer_views = new ViewList(
      this.add_layer_model,
      this.remove_layer_view,
      this,
    );

    this.Overlayer_views = new ViewList<ImageOverLayerView>(
      this.add_over_layer_model,
      this.remove_over_layer_view,
      this,
    );

    this.map = new Map({
      target: this.mapContainer,
      view: new View({
        center: this.model.get('center'),
        zoom: this.model.get('zoom'),
      }),
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
    });

    this.layers_changed();
    this.model.on('change:layers', this.layers_changed, this);
    this.model.on('change:over_layers', this.OverLayers_changed, this);
    //this.model.on('change:image_bounds', this.update_position_overlay, this);
    this.model.on('change:zoom', this.zoom_changed, this);
    this.model.on('change:center', this.center_changed, this);
  }

  layers_changed() {
    const layers = this.model.get('layers') as TileLayerModel[];
    this.layer_views.update(layers);
  }

  OverLayers_changed() {
    const over_layers = this.model.get('over_layers') as ImageOverLayerModel[];
    this.Overlayer_views.update(over_layers);
    console.log('OverLayers_changed');
  }

  zoom_changed() {
    const newZoom = this.model.get('zoom');
    if (newZoom !== undefined && newZoom !== null) {
      this.map.getView().setZoom(newZoom);
    }
  }

  center_changed() {
    const newCenter = this.model.get('center');
    if (newCenter !== undefined && newCenter !== null) {
      this.map.getView().setCenter(newCenter);
    }
  }

  remove_layer_view(child_view: TileLayerView) {
    this.map.removeLayer(child_view.tileLayer);
    child_view.remove();
  }

  remove_over_layer_view(child_view: ImageOverLayerView) {
    if (child_view.overlay) {
      this.map.removeOverlay(child_view.overlay);
    }
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

  async add_over_layer_model(child_model: ImageOverLayerModel) {
    const view = await this.create_child_view<ImageOverLayerView>(child_model, {
      map_view: this,
    });
    this.map.addOverlay(view.overlay);
    this.displayed.then(() => {
      view.trigger('displayed', this);
    });
    console.log('supposee added');
    return view;
  }
  /*
  update_position_overlay(nv_image_bounds: number[]) {
    if (nv_image_bounds !== undefined && nv_image_bounds !== null) {
      this.overlay.setPosition(nv_image_bounds);
    }
  }*/
  imageElement: HTMLImageElement;
  mapContainer: HTMLDivElement;
  map: Map;
  layer_views: ViewList<TileLayerView>;
  Overlayer_views: ViewList<ImageOverLayerView>;
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
    const url = this.model.get('url');

    this.tileLayer = new TileLayer({
      source: new XYZ({
        url: url,
      }),
    });

    this.url_changed();
    this.model.on('change:url', this.url_changed, this);
  }

  url_changed() {
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

export class ImageOverLayerModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ImageOverLayerModel.model_name,
      _model_module: ImageOverLayerModel.model_module,
      _model_module_version: ImageOverLayerModel.model_module_version,
      _view_name: ImageOverLayerModel.view_name,
      _view_module: ImageOverLayerModel.view_module,
      _view_module_version: ImageOverLayerModel.view_module_version,
      value: 'Hello World',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Ajoutez ici tous les sérialiseurs supplémentaires
  };

  static model_name = 'ImageOverLayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ImageOverLayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class ImageOverLayerView extends DOMWidgetView {
  imageLayer: ImageLayer<ImageSource>;
  overlay: Overlay;
  imageElement: HTMLImageElement;
  render() {
    super.render();
    console.log('Render called');
    this.update_image_element();
  }

  initialize(parameters: WidgetView.IInitializeParameters<WidgetModel>) {
    super.initialize(parameters);
    this.imageElement = document.createElement('img');
    this.create_image_layer();
    this.create_overlay();
    this.model_events();
    console.log('Overlay created in initialize:', this.overlay);
  }

  create_image_layer() {
    this.imageLayer = new ImageLayer({
      source: new ImageStatic({
        url: this.model.get('image_url'),
        imageExtent: this.model.get('image_bounds'),
      }),
    });
  }
  create_overlay() {
    const imageExtent = this.model.get('image_bounds');
    this.overlay = new Overlay({
      position: imageExtent,
      element: this.imageElement,
    });
    return this.overlay;
  }
  model_events() {
    this.listenTo(this.model, 'change:image_url', () => {
      const url = this.model.get('image_url');
      console.log('hne');
      console.log(url);
      if (url) {
        const newSource = new ImageStatic({
          url: this.model.get('image_url'),
          imageExtent: this.model.get('image_bounds'),
        });
        this.imageLayer.setSource(newSource);
        this.imageElement.src = url;
        this.update_image_element();
      }
    });
    this.update_image_element();
    this.listenTo(this.model, 'change:image_bounds', () => {
      const nv_image_bounds = this.model.get('image_bounds');
      this.imageLayer.setExtent(nv_image_bounds);
      this.trigger('image_bounds_changed', nv_image_bounds);
    });
    this.on('image_bounds_changed', (nv_image_bounds: number[]) => {
      this.update_position_overlay(nv_image_bounds);
    });
  }
  update_image_element() {
    const imageSource = this.imageLayer.getSource() as ImageStatic;
    if (imageSource) {
      const imageUrl = imageSource.getUrl();
      if (imageUrl) {
        this.imageElement.src = imageUrl;
        console.log(this.imageElement);
        console.log('imageURL');
        console.log(this.overlay.getElement);
      }
    }
    console.log('update_image_element');
  }
  update_position_overlay(nv_image_bounds: number[]) {
    if (nv_image_bounds && this.overlay) {
      this.overlay.setPosition(nv_image_bounds);
    }
  }
}
