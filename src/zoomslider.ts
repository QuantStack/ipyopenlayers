// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import {
  DOMWidgetModel,
  //WidgetView,
  ISerializers,
} from '@jupyter-widgets/base';
import { BaseControlModel, BaseControlView } from './basecontrol';
import ZoomSlider from 'ol/control/ZoomSlider';

import 'ol/ol.css';
import { MODULE_NAME, MODULE_VERSION } from './version';
import '../css/widget.css';

export class ZoomSliderModel extends BaseControlModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ZoomSliderModel.model_name,
      _model_module: ZoomSliderModel.model_module,
      _model_module_version: ZoomSliderModel.model_module_version,
      _view_name: ZoomSliderModel.view_name,
      _view_module: ZoomSliderModel.view_module,
      _view_module_version: ZoomSliderModel.view_module_version,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Ajoutez ici tous les sérialiseurs supplémentaires
  };

  static model_name = 'ZoomSliderModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ZoomSliderView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}
export class ZoomSliderView extends BaseControlView {
  render() {
    super.render();
    this.element = document.createElement('div');
    console.log('hello');
    this.create_zoom_obj();
  }

  model_events() {
    this.listenTo(this.model, 'change:active', this.create_zoom_obj);
  }
  create_zoom_obj() {
    console.log('creating obj');
    this.element.className = 'ol-zoomslider';
    this.obj = new ZoomSlider({
      className: 'ol-zoomslider',
      target: this.element, // Use the created element
    });
    console.log('created obj');
    console.log(this.obj);
    this.map_view.map.addControl(this.element);
  }
}

/*

  model_events() {
    super.model_events();
    this.listenTo(this.model, 'change:popup_content', this.updatePopupElement);
  }

  updatePopupElement() {
    const popupContent = this.model.get('popup_content');
    if (popupContent) {
      this.element.innerHTML = popupContent;
    }
  }
export class ZoomSliderView extends BaseControlView {
  render() {
    this.element = document.createElement('div');
    super.render();
    this.activateZoomSlider();
  }

  model_events() {
    super.model_events();
    this.listenTo(this.model, 'change:zoom_slider', this.activateZoomSlider);
  }

  activateZoomSlider() {
    const nv_zoom_slider = this.model.get('zoom_slider');
    if (nv_zoom_slider !== undefined && nv_zoom_slider !== null) {
      this.map.addControl(new olControl.ZoomSlider());
    }
  }
  map: MapView;
}
*/
