import { ISerializers } from '@jupyter-widgets/base';
import { LayerModel, LayerView } from './layer';
import { MODULE_NAME, MODULE_VERSION } from './version';
import Heatmap from 'ol/layer/Heatmap.js';
import { Vector as VectorSource } from 'ol/source';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';

export class HeatmapLayerModel extends LayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: HeatmapLayerModel.model_name,
      _model_module: HeatmapLayerModel.model_module,
      _model_module_version: HeatmapLayerModel.model_module_version,
      _view_name: HeatmapLayerModel.view_name,
      _view_module: HeatmapLayerModel.view_module,
      _view_module_version: HeatmapLayerModel.view_module_version,
      blur: 15,
      radius: 8,
      points: [],
    };
  }

  static serializers: ISerializers = {
    ...LayerModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'HeatmapLayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'HeatmapLayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class HeatmapLayerView extends LayerView {
  obj: Heatmap;

  render() {
    this.create_obj();
    this.modelEvents();
  }

  create_obj() {
    const source = new VectorSource({
      features: this.model
        .get('points')
        .map((point: [number, number, number]) => {
          const feature = new Feature(new Point([point[1], point[0]])); // Note: [lon, lat]
          feature.set('weight', point[2]);
          return feature;
        }),
    });

    this.obj = new Heatmap({
      source: source,
      blur: this.model.get('blur'),
      radius: this.model.get('radius'),
    });
  }

  modelEvents() {
    this.model.on('change:blur', this.update_blur, this);
    this.model.on('change:radius', this.update_radius, this);
    this.model.on('change:points', this.update_points, this);
  }

  update_blur() {
    this.obj.setBlur(this.model.get('blur'));
  }

  update_radius() {
    this.obj.setRadius(this.model.get('radius'));
  }

  update_points() {
    const source = new VectorSource({
      features: this.model
        .get('points')
        .map((point: [number, number, number]) => {
          const feature = new Feature(new Point([point[1], point[0]])); // Note: [lon, lat]
          feature.set('weight', point[2]);
          return feature;
        }),
    });
    this.obj.setSource(source);
  }
}
