// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
// Import des modules nécessaires
import 'ol/ol.css';
import { ISerializers, DOMWidgetModel } from '@jupyter-widgets/base';
import 'ol/ol.css';
import { MODULE_NAME, MODULE_VERSION } from './version';
import '../css/widget.css';
import VectorSource from 'ol/source/Vector';
import { LayerModel, LayerView } from './layer';
import Feature from 'ol/Feature';
// @ts-expect-error use of a java script style
import { createStupidStyle, createBarbsStyle } from 'olwind/src/styling';
// @ts-expect-error use of a java script arrow
import { ArrowLayer } from 'olwind/src/ArrowLayer';
// @ts-expect-error use of a java script uvbuffer
import UVBuffer from 'olwind/src/UVBuffer';

export class WindLayerModel extends LayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: WindLayerModel.model_name,
      _model_module: WindLayerModel.model_module,
      _model_module_version: WindLayerModel.model_module_version,
      _view_name: WindLayerModel.view_name,
      _view_module: WindLayerModel.view_module,
      _view_module_version: WindLayerModel.view_module_version,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'WindLayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'WindLayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class WindLayerView extends LayerView {
  obj: ArrowLayer;
  vectorSource: VectorSource;
  uvBuffer: UVBuffer;
  features: Feature[];
  updateWhileInteracting: boolean;

  render() {
    this.create_obj();
    this.modelEvents();
  }

  create_obj() {
    const metadata = this.model.get('metadata');
    const ufile = this.model.get('ufile');
    const vfile = this.model.get('vfile');
    try {
      const { extent, width, height } = metadata;

      const uArray = [].concat(...ufile.array);
      const vArray = [].concat(...vfile.array);

      const uBuffer = new Float32Array(uArray);
      const vBuffer = new Float32Array(vArray);

      this.uvBuffer = new UVBuffer(uBuffer, vBuffer, width, height, extent);

      this.createFeaturesAndArrowLayer();
    } catch (err) {
      console.error('Error processing files:', err);
    }
  }
  createFeaturesAndArrowLayer() {
    const style =
      this.model.get('style') === 'barbs'
        ? createBarbsStyle(this.uvBuffer)
        : createStupidStyle(this.uvBuffer);

    const options = {
      uvBuffer: this.uvBuffer,
      opacity: this.model.get('opacity'),
      updateWhileInteracting: this.model.get('updateWhileInteracting'),
      style: style,
    };

    try {
      this.obj = new ArrowLayer(options);
    } catch (error) {
      console.error('Error creating ArrowLayer:', error);
    }
  }

  modelEvents() {
    this.listenTo(this.model, 'change:uvBuffer', this.updateUVBuffer);
    this.listenTo(
      this.model,
      'change:updateWhileInteracting',
      this.updateUpdateWhileInteracting,
    );
  }
  // still needs implementation

  updateUVBuffer() {
    this.uvBuffer = this.model.get('uvBuffer');
    //this.obj.create_obj(this.uvBuffer);
  }
  // still needs implementation
  updateUpdateWhileInteracting() {
    this.updateWhileInteracting = this.model.get('updateWhileInteracting');
    //this.obj.setUpdateWhileInteracting(this.updateWhileInteracting);
  }
}
