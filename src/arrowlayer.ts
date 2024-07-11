import { StyleFunction } from 'ol/style/Style';
import { ISerializers, DOMWidgetModel } from '@jupyter-widgets/base';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { RegularShape, Stroke, Fill, Style } from 'ol/style';
import { LayerModel, LayerView } from './layer';
import { MODULE_NAME, MODULE_VERSION } from './version';

export class ArrowLayerModel extends LayerModel {
  defaults() {
    return {
      ...super.defaults(),
      _model_name: ArrowLayerModel.model_name,
      _model_module: ArrowLayerModel.model_module,
      _model_module_version: ArrowLayerModel.model_module_version,
      _view_name: ArrowLayerModel.view_name,
      _view_module: ArrowLayerModel.view_module,
      _view_module_version: ArrowLayerModel.view_module_version,
      opacity: 1,
      data: [],
    };
  }

  static serializers: ISerializers = {
    ...DOMWidgetModel.serializers,
    // Ajoutez ici les sérialiseurs supplémentaires
  };

  static model_name = 'ArrowLayerModel';
  static model_module = MODULE_NAME;
  static model_module_version = MODULE_VERSION;
  static view_name = 'ArrowLayerView';
  static view_module = MODULE_NAME;
  static view_module_version = MODULE_VERSION;
}

export class ArrowLayerView extends LayerView {
  obj: VectorLayer<Feature>;

  render() {
    this.initVectorLayer();
    this.create_obj();
    this.modelEvents();
  }

  create_obj() {
    this.obj = this.vectorLayer;
  }

  initVectorLayer() {
    const source = new VectorSource({
      attributions:
        'Weather data by <a href="https://openweathermap.org/current">OpenWeather</a>',
    });
    this.vectorLayer = new VectorLayer({
      source: source,
      style: this.createStyleFunction(),
    });

    this.updateData();
  }

  createStyleFunction(): StyleFunction {
    const shaft = new RegularShape({
      points: 2,
      radius: 4,
      stroke: new Stroke({
        width: 4,
        color: 'blue',
      }),
      rotateWithView: true,
    });

    const head = new RegularShape({
      points: 3,
      radius: 6,
      fill: new Fill({
        color: 'red',
      }),
      rotateWithView: true,
    });

    return (feature) => {
      const wind = feature.get('wind');
      const angle = ((wind.deg - 180) * Math.PI) / 180;
      const scale = wind.speed / 10;
      shaft.setScale([1, scale]);
      shaft.setRotation(angle);
      head.setDisplacement([
        0,
        head.getRadius() / 2 + shaft.getRadius() * scale,
      ]);
      head.setRotation(angle);
      return [new Style({ image: shaft }), new Style({ image: head })];
    };
  }

  updateStyle() {
    this.vectorLayer.setStyle(this.createStyleFunction());
  }

  updateData() {
    const data = this.model.get('data') as {
      coord: { lon: number; lat: number };
      wind: { speed: number; deg: number };
    }[];
    const features: Feature<Point>[] = [];

    if (Array.isArray(data)) {
      data.forEach((point) => {
        const feature = new Feature(
          new Point([point.coord.lon, point.coord.lat]),
        );
        feature.setProperties({
          wind: {
            speed: point.wind.speed,
            deg: point.wind.deg,
          },
        });
        features.push(feature);
      });
    }

    const source = this.vectorLayer?.getSource();
    if (source) {
      source.clear();
      source.addFeatures(features);
    }
  }

  modelEvents() {
    this.listenTo(this.model, 'change:styleType', this.updateStyle);
    this.listenTo(this.model, 'change:data', this.updateData);
    this.listenTo(this.model, 'change:opacity', () => {
      this.vectorLayer.setOpacity(this.model.get('opacity'));
    });
  }

  vectorLayer: VectorLayer<Feature>;
  vectorSource: VectorSource;
}