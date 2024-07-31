import { DOMWidgetModel, ISerializers } from '@jupyter-widgets/base';
import WebGLTileLayer from 'ol/layer/WebGLTile.js';
import XYZ from 'ol/source/XYZ.js';
import { MODULE_NAME, MODULE_VERSION } from './version';
import { MapView } from './widget';
import { LayerModel, LayerView } from './layer';

type WebGLEvent = {
  context: WebGLRenderingContext;
};

export class RasterTileLayerModel extends LayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: RasterTileLayerModel.model_name,
      _model_module: RasterTileLayerModel.model_module,
      _model_module_version: RasterTileLayerModel.model_module_version,
      _view_name: RasterTileLayerModel.view_name,
      _view_module: RasterTileLayerModel.view_module,
      _view_module_version: RasterTileLayerModel.view_module_version,
      layers: [],
      url: '',
      attributions: [],
      tileSize: 256,
      max_zoom: 19,
      min_zoom: 0,
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Add any extra serializers ici
  };

  static model_name = 'RasterTileLayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'RasterTileLayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class RasterTileLayerView extends LayerView {
  map_view: MapView;
  tileLayer: WebGLTileLayer;

  private prerenderListener: (event: WebGLEvent) => void;
  private postrenderListener: (event: WebGLEvent) => void;
  private previousSwipePosition: number | undefined;

  constructor(options: any) {
    super(options);
    this.map_view = options.options.map_view;
    this.prerenderListener = this.map_view.handlePrerender.bind(this.map_view);
    this.postrenderListener = this.map_view.handlePostrender.bind(
      this.map_view,
    );
    this.previousSwipePosition = undefined;
  }

  render() {
    super.render();
    this.urlChanged();
    this.model.on('change:url', this.urlChanged, this);
    this.model.on(
      'change:swipe_position',
      this.handleSwipePositionChanged,
      this,
    );
    this.updateEventListeners();
  }

  create_obj() {
    this.obj = this.tileLayer = new WebGLTileLayer({
      source: new XYZ({
        url: this.model.get('url'),
        attributions: this.model.get('attributions'),
        tileSize: this.model.get('tileSize'),
        maxZoom: this.model.get('max_zoom'),
        minZoom: this.model.get('min_zoom'),
      }),
    });
  }

  urlChanged() {
    const newUrl = this.model.get('url');
    if (newUrl) {
      const newSource = new XYZ({
        url: newUrl,
        attributions: this.model.get('attributions'),
        tileSize: this.model.get('tileSize'),
        maxZoom: this.model.get('max_zoom'),
        minZoom: this.model.get('min_zoom'),
      });
      this.tileLayer.setSource(newSource);
    }
  }

  handleSwipePositionChanged() {
    const swipePosition = this.model.get('swipe_position');
    console.log('Swipe Position Changed:', swipePosition);

    if (this.previousSwipePosition !== swipePosition) {
      this.previousSwipePosition = swipePosition;
      this.updateEventListeners();
      this.map_view.map.render();
    }
  }

  updateEventListeners() {
    console.log('Updating event listeners');
    const swipePosition = this.model.get('swipe_position');
    (this.tileLayer as any).un('precompose', this.prerenderListener);
    (this.tileLayer as any).un('postcompose', this.postrenderListener);

    if (swipePosition >= 0) {
      (this.tileLayer as any).on('precompose', this.prerenderListener);
      (this.tileLayer as any).on('postcompose', this.postrenderListener);
    }
    console.log('Event listeners updated');
  }
}
