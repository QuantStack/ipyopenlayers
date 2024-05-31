// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import { WidgetModel, WidgetView, ISerializers } from '@jupyter-widgets/base';
import { MODULE_NAME, MODULE_VERSION } from './version';
import Layer from 'ol/layer/Layer.js';

export class LayerModel extends WidgetModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: LayerModel.model_name,
      _model_module: LayerModel.model_module,
      _model_module_version: LayerModel.model_module_version,
      _view_name: LayerModel.view_name,
      _view_module: LayerModel.view_module,
      _view_module_version: LayerModel.view_module_version,
    };
  }

  static serializers: ISerializers = {
    ...WidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'LayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'LayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export abstract class LayerView extends WidgetView {
  obj: Layer;

  render() {
    super.render();
    this.create_obj();
  }

  abstract create_obj(): void;
}
