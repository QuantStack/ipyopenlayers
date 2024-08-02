// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import { unpack_models } from '@jupyter-widgets/base';
import { BaseControlModel, BaseControlView } from './basecontrol';
import 'ol/ol.css';
import '../css/widget.css';
import SplitMapControl from './splitcontrol';

// Modèle pour le contrôle de carte divisée
export class SplitMapControlModel extends BaseControlModel {
  defaults() {
    return {
      ...super.defaults(),
      _view_name: 'SplitMapControlView',
      _model_name: 'SplitMapControlModel',
      left_layer: undefined,
      right_layer: undefined,
      swipe_position: 50,
    };
  }
}

SplitMapControlModel.serializers = {
  ...BaseControlModel.serializers,
  left_layer: { deserialize: unpack_models },
  right_layer: { deserialize: unpack_models },
};

function asArray(arg: any) {
  return Array.isArray(arg) ? arg : [arg];
}

export class SplitMapControlView extends BaseControlView {
  swipe_position: number;
  initialize(parameters: any) {
    super.initialize(parameters);
    this.map_view = this.options.map_view;
    this.map_view.layer_views = this.options.map_view.layerViews;
    console.log('hello');
    if (this.map_view && !this.map_view.layerViews) {
      console.warn(
        'Layer views is not initialized. Ensure it is properly set.',
      );
    }
  }

  createObj() {
    console.log('Creating SplitMapControl object...');
    const left_models = asArray(this.model.get('left_layer'));

    const right_models = asArray(this.model.get('right_layer'));

    let layersModel = this.map_view.model.get('layers');

    layersModel = layersModel.concat(left_models, right_models);

    return this.map_view.layer_views.update(layersModel).then((views: any) => {
      const left_views: any[] = [];
      console.log(left_views);
      const right_views: any[] = [];
      console.log(right_views);

      views.forEach((view: any) => {
        if (left_models.indexOf(view.model) !== -1) {
          left_views.push(view.obj);
        }
        if (right_models.indexOf(view.model) !== -1) {
          right_views.push(view.obj);
        }
      });

      console.log('Left views:', left_views);
      console.log('Right views:', right_views);
      this.swipe_position = this.model.get('swipe_position');
      console.log('swipe_position:', this.swipe_position);

      this.obj = new SplitMapControl(left_views[0], right_views[0], {
        map_view: this.map_view,
        swipe_position: this.swipe_position,
      });
      console.log('SplitMapControl created:', this.obj);
    });
  }
}
