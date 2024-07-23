// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import { DOMWidgetModel, ISerializers } from '@jupyter-widgets/base';
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import GeoTIFF from 'ol/source/GeoTIFF.js';
import { MODULE_NAME, MODULE_VERSION } from './version';
import { LayerModel, LayerView } from './layer';

<<<<<<< HEAD
export class GeoTIFFTileLayerModel extends LayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: GeoTIFFTileLayerModel.model_name,
      _model_module: GeoTIFFTileLayerModel.model_module,
      _model_module_version: GeoTIFFTileLayerModel.model_module_version,
      _view_name: GeoTIFFTileLayerModel.view_name,
      _view_module: GeoTIFFTileLayerModel.view_module,
      _view_module_version: GeoTIFFTileLayerModel.view_module_version,
      url: '',
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers here
  };

  static model_name = 'GeoTIFFTileLayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'GeoTIFFTileLayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class GeoTIFFTileLayerView extends LayerView {
  render() {
    super.render();
    this.sourcesChanged();
    this.model.on('change:url', this.sourcesChanged, this);
  }

  create_obj() {
    const url = this.model.get('url');

    if (url) {
      this.obj = new WebGLTileLayer({
        source: new GeoTIFF({
          sources: [{ url: url }],
        }),
      });
    }
  }
  sourcesChanged() {
    const newUrl = this.model.get('url');

    if (newUrl) {
      const newSource = new GeoTIFF({
        sources: [{ url: newUrl }],
      });
      this.obj.setSource(newSource);
    }
  }

  obj: WebGLTileLayer;
=======

export class GeoTIFFTileLayerModel extends LayerModel {
 defaults() {
   return {
     ...super.defaults(),
     _model_name: GeoTIFFTileLayerModel.model_name,
     _model_module: GeoTIFFTileLayerModel.model_module,
     _model_module_version: GeoTIFFTileLayerModel.model_module_version,
     _view_name: GeoTIFFTileLayerModel.view_name,
     _view_module: GeoTIFFTileLayerModel.view_module,
     _view_module_version: GeoTIFFTileLayerModel.view_module_version,
     source: [],
   };
 }


 static serializers: ISerializers = {
   ...DOMWidgetModel.serializers,
   // Add any extra serializers here
 };


 static model_name = 'GeoTIFFTileLayerModel';
 static model_module = MODULE_NAME;
 static model_module_version = MODULE_VERSION;
 static view_name = 'GeoTIFFTileLayerView';
 static view_module = MODULE_NAME;
 static view_module_version = MODULE_VERSION;
}


export class GeoTIFFTileLayerView extends LayerView {
 render() {
   super.render();
   this.sourcesChanged();
   this.model.on('change:sources', this.sourcesChanged, this);
 }


 create_obj() {
   const sources = this.model.get('sources').map((source: any) => ({
     url: source.url,
   }));


   this.obj = this.tileLayer = new WebGLTileLayer({
     source: new GeoTIFF({
       sources: sources,
     }),
   });
 }


 sourcesChanged() {
   const newSources = this.model.get('sources').map((source: any) => ({
     url: source.url,
   }));


   if (newSources) {
     const newSource = new GeoTIFF({
       sources: newSources,
     });
     this.tileLayer.setSource(newSource);
   }
 }


 tileLayer: WebGLTileLayer;
>>>>>>> 7349011 (added GeoTIFFTileLayer)
}
