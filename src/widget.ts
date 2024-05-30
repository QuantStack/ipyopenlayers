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
    overlays: { deserialize: unpack_models },
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

    this.layerViews = new ViewList(
      this.addLayerModel,
      this.removeLayerView,
      this,
    );

    this.overlayViews = new ViewList<BaseOverlayView>(
      this.addOverlayModel,
      this.removeOverlayView,
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

    this.layersChanged();
    this.model.on('change:layers', this.layersChanged, this);
    this.model.on('change:overlays', this.overlayChanged, this);
    this.model.on('change:zoom', this.zoomChanged, this);
    this.model.on('change:center', this.centerChanged, this);
  }

  layersChanged() {
    const layers = this.model.get('layers') as TileLayerModel[];
    this.layerViews.update(layers);
  }

  overlayChanged() {
    const overlay = this.model.get('overlays') as BaseOverlayModel[];
    this.overlayViews.update(overlay);
  }

  zoomChanged() {
    const newZoom = this.model.get('zoom');
    if (newZoom !== undefined && newZoom !== null) {
      this.map.getView().setZoom(newZoom);
    }
  }

  centerChanged() {
    const newCenter = this.model.get('center');
    if (newCenter !== undefined && newCenter !== null) {
      this.map.getView().setCenter(newCenter);
    }
  }

  removeLayerView(child_view: TileLayerView) {
    this.map.removeLayer(child_view.tileLayer);
    child_view.remove();
  }

  removeOverlayView(child_view: BaseOverlayView) {
    if (child_view.overlay) {
      this.map.removeOverlay(child_view.overlay);
    }
    child_view.remove();
  }

  async addLayerModel(child_model: TileLayerModel) {
    const view = await this.create_child_view<TileLayerView>(child_model, {
      map_view: this,
    });
    this.map.addLayer(view.tileLayer);

    this.displayed.then(() => {
      view.trigger('displayed', this);
    });
    return view;
  }

  async addOverlayModel(child_model: BaseOverlayModel) {
    const view = await this.create_child_view<BaseOverlayView>(child_model, {
      map_view: this,
    });
    this.map.addOverlay(view.overlay);
    this.displayed.then(() => {
      view.trigger('displayed', this);
    });
    return view;
  }

  imageElement: HTMLImageElement;
  mapContainer: HTMLDivElement;
  map: Map;
  layerViews: ViewList<TileLayerView>;
  overlayViews: ViewList<BaseOverlayView>;
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

export class BaseOverlayModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: BaseOverlayModel.model_name,
      _model_module: BaseOverlayModel.model_module,
      _model_module_version: BaseOverlayModel.model_module_version,
      _view_name: BaseOverlayModel.view_name,
      _view_module: BaseOverlayModel.view_module,
      _view_module_version: BaseOverlayModel.view_module_version,
      value: 'Hello World',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Ajoutez ici tous les sérialiseurs supplémentaires
  };

  static model_name = 'BaseOverlayModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'BaseOverlayView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class BaseOverlayView extends DOMWidgetView {
  overlay: Overlay;
  element: HTMLElement;
  videoElement: HTMLVideoElement;

  render() {
    super.render();
    this.updateElement();
  }

  initialize(parameters: WidgetView.IInitializeParameters<WidgetModel>) {
    super.initialize(parameters);
    this.initializeElement();
    this.createOverlay();
    this.model_events();
  }

  initializeElement() {
    const overlayType = this.model.get('overlay_type');

    if (overlayType === 'image') {
      this.element = document.createElement('img');
      this.updateImageElement();
    } else if (overlayType === 'video') {
      this.element = document.createElement('div');
      this.videoElement = document.createElement('video');
      this.videoElement.controls = true;
      this.videoElement.src = this.model.get('video_url');
      this.element.appendChild(this.videoElement);
      this.updateVideoElement();
    } else if (overlayType === 'popup') {
      this.element = document.createElement('div');
      this.updatePopupElement();
    }
  }

  createOverlay() {
    const position = this.model.get('position');
    this.overlay = new Overlay({
      position: position,
      element: this.element,
    });
    return this.overlay;
  }

  model_events() {
    this.listenTo(this.model, 'change:overlay_type', this.initializeElement);
    this.listenTo(this.model, 'change:image_url', this.updateImageElement);
    this.listenTo(this.model, 'change:video_url', this.updateVideoElement);
    this.listenTo(this.model, 'change:popup_content', this.updatePopupElement);
    this.listenTo(this.model, 'change:position', this.updatePosition);
  }

  updateElement() {
    const overlayType = this.model.get('overlay_type');
    if (overlayType === 'image') {
      this.updateImageElement();
    } else if (overlayType === 'video') {
      this.updateVideoElement();
    } else if (overlayType === 'popup') {
      this.updatePopupElement();
    }
  }

  updateImageElement() {
    const imageUrl = this.model.get('image_url');
    if (imageUrl) {
      (this.element as HTMLImageElement).src = imageUrl;
    }
  }

  updateVideoElement() {
    const videoUrl = this.model.get('video_url');
    if (videoUrl) {
      this.videoElement.src = this.model.get('video_url');
    }
  }

  updatePopupElement() {
    const popupContent = this.model.get('popup_content');
    if (popupContent) {
      this.element.innerHTML = popupContent;
    }
  }

  updatePosition() {
    const position = this.model.get('position');
    this.overlay.setPosition(position);
  }
}
