// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import Control from 'ol/control/Control.js';
import 'ol/ol.css';
import '../css/widget.css';
import {
  DOMWidgetModel,
  DOMWidgetView,
  //WidgetView,
  ISerializers,
} from '@jupyter-widgets/base';

import 'ol/ol.css';
import { MODULE_NAME, MODULE_VERSION } from './version';
import '../css/widget.css';

export class BaseControlModel extends DOMWidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: BaseControlModel.model_name,
      _model_module: BaseControlModel.model_module,
      _model_module_version: BaseControlModel.model_module_version,
      _view_name: BaseControlModel.view_name,
      _view_module: BaseControlModel.view_module,
      _view_module_version: BaseControlModel.view_module_version,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
  };

  static model_name = 'BaseControlModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'BaseControlView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class BaseControlView extends DOMWidgetView {
  map_view: any;
  element: HTMLElement;
  obj: Control;
  render() {
    super.render();
    this.create_obj();
    //this.model_events();
  }
  create_obj() {
    this.obj = new Control({
      element: this.element,
    });
    return this.obj;
  }
  /*
  model_events() {
  }
 
  get_controls(): { [key: string]: any } {
    const controls = this.model.get('controls') as string[];
    const result: { [key: string]: any } = {};
    controls.forEach((key: string) => {
      result[key] = this.model.get(key);
    });
    return result;
  }*/
}
