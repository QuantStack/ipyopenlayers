// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import { unpack_models, ISerializers } from '@jupyter-widgets/base';
import { BaseControlModel, BaseControlView } from './basecontrol';
import 'ol/ol.css';
import '../css/widget.css';
import SplitMapControl from './splitcontrol';
import { MODULE_NAME, MODULE_VERSION } from './version';

export class SplitMapControlModel extends BaseControlModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: SplitMapControlModel.model_name,
      _model_module: SplitMapControlModel.model_module,
      _model_module_version: SplitMapControlModel.model_module_version,
      _view_name: SplitMapControlModel.view_name,
      _view_module: SplitMapControlModel.view_module,
      _view_module_version: SplitMapControlModel.view_module_version,
      left_layer: undefined,
      right_layer: undefined,
      swipe_position: 50,
    };
  }

  static serializers: ISerializers = {
    ...BaseControlModel.serializers,
    left_layer: { deserialize: unpack_models },
    right_layer: { deserialize: unpack_models },
  };

  static model_name = 'SplitMapControlModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'SplitMapControlView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

function asArray(arg: any) {
  return Array.isArray(arg) ? arg : [arg];
}

export class SplitMapControlView extends BaseControlView {
  swipe_position: number;

  initialize(parameters: any) {
    super.initialize(parameters);
    this.map_view = this.options.map_view;
    this.map_view.layer_views = this.options.map_view.layerViews;
    if (this.map_view && !this.map_view.layerViews) {
      console.warn('Layer views is not initialized. Ensure it is properly set.');
    }
  }

  createObj() {
    const left_models = asArray(this.model.get('left_layer'));
    let layersModel = this.map_view.model.get('layers');
    layersModel = layersModel.concat(left_models);

    return this.map_view.layer_views.update(layersModel).then((views: any) => {
      const left_views: any[] = [];
      views.forEach((view: any) => {
        if (left_models.indexOf(view.model) !== -1) {
          left_views.push(view.obj);
        }
      });

      this.swipe_position = this.model.get('swipe_position');

      this.obj = new SplitMapControl(left_views[0], {
        map_view: this.map_view,
        swipe_position: this.swipe_position,
      });
    });
  }
}
