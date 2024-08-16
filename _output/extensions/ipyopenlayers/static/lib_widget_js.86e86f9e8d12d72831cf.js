(self["webpackChunkipyopenlayers"] = self["webpackChunkipyopenlayers"] || []).push([["lib_widget_js"],{

/***/ "./node_modules/@jupyterlab/builder/node_modules/css-loader/dist/cjs.js!./css/widget.css":
/*!***********************************************************************************************!*\
  !*** ./node_modules/@jupyterlab/builder/node_modules/css-loader/dist/cjs.js!./css/widget.css ***!
  \***********************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/@jupyterlab/builder/node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/@jupyterlab/builder/node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/@jupyterlab/builder/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/@jupyterlab/builder/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_jupyterlab_builder_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.lm-Widget.lm-Panel.jp-OutputArea-output.ipyopenlayer-map-container-wrapper {
  height: 100%;
}
.lm-Widget.lm-Panel.jp-OutputArea-child.jp-OutputArea-executeResult.ipyopenlayer-map-container-wrapper-parent {
  height: 100%;
}

.ol-container {
  height: 100%;
  width: 100%;
}
.jp-LinkedOutputView .jupyter-widgets.ipyopenlayer-widgets {
  min-height: 500px;
  height: 100%;
}

.jupyter-widgets.ipyopenlayer-widgets {
  height: 400px;
  overflow: hidden;
  flex: 1 1 auto;
}
`, "",{"version":3,"sources":["webpack://./css/widget.css"],"names":[],"mappings":"AAAA;EACE,YAAY;AACd;AACA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;AACA;EACE,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,gBAAgB;EAChB,cAAc;AAChB","sourcesContent":[".lm-Widget.lm-Panel.jp-OutputArea-output.ipyopenlayer-map-container-wrapper {\n  height: 100%;\n}\n.lm-Widget.lm-Panel.jp-OutputArea-child.jp-OutputArea-executeResult.ipyopenlayer-map-container-wrapper-parent {\n  height: 100%;\n}\n\n.ol-container {\n  height: 100%;\n  width: 100%;\n}\n.jp-LinkedOutputView .jupyter-widgets.ipyopenlayer-widgets {\n  min-height: 500px;\n  height: 100%;\n}\n\n.jupyter-widgets.ipyopenlayer-widgets {\n  height: 400px;\n  overflow: hidden;\n  flex: 1 1 auto;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./lib/basecontrol.js":
/*!****************************!*\
  !*** ./lib/basecontrol.js ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseControlView = exports.BaseControlModel = void 0;
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
class BaseControlModel extends base_1.DOMWidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: BaseControlModel.model_name, _model_module: BaseControlModel.model_module, _model_module_version: BaseControlModel.model_module_version, _view_name: BaseControlModel.view_name, _view_module: BaseControlModel.view_module, _view_module_version: BaseControlModel.view_module_version });
    }
}
exports.BaseControlModel = BaseControlModel;
BaseControlModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
BaseControlModel.model_name = 'BaseControlModel';
BaseControlModel.model_module = version_1.MODULE_NAME;
BaseControlModel.model_module_version = version_1.MODULE_VERSION;
BaseControlModel.view_name = 'BaseControlView';
BaseControlModel.view_module = version_1.MODULE_NAME;
BaseControlModel.view_module_version = version_1.MODULE_VERSION;
class BaseControlView extends base_1.DOMWidgetView {
    render() {
        super.render();
        this.createObj();
    }
}
exports.BaseControlView = BaseControlView;


/***/ }),

/***/ "./lib/baseoverlay.js":
/*!****************************!*\
  !*** ./lib/baseoverlay.js ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseOverlayView = exports.BaseOverlayModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
const Overlay_1 = __importDefault(__webpack_require__(/*! ol/Overlay */ "./node_modules/ol/Overlay.js"));
class BaseOverlayModel extends base_1.DOMWidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: BaseOverlayModel.model_name, _model_module: BaseOverlayModel.model_module, _model_module_version: BaseOverlayModel.model_module_version, _view_name: BaseOverlayModel.view_name, _view_module: BaseOverlayModel.view_module, _view_module_version: BaseOverlayModel.view_module_version });
    }
}
exports.BaseOverlayModel = BaseOverlayModel;
BaseOverlayModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
BaseOverlayModel.model_name = 'BaseOverlayModel';
BaseOverlayModel.model_module = version_1.MODULE_NAME;
BaseOverlayModel.model_module_version = version_1.MODULE_VERSION;
BaseOverlayModel.view_name = 'BaseOverlayView';
BaseOverlayModel.view_module = version_1.MODULE_NAME;
BaseOverlayModel.view_module_version = version_1.MODULE_VERSION;
class BaseOverlayView extends base_1.DOMWidgetView {
    render() {
        super.render();
        this.createElement();
        this.createOverlay();
        this.model_events();
    }
    createOverlay() {
        const position = this.model.get('position');
        this.overlay = new Overlay_1.default({
            position: position,
            element: this.element,
        });
        return this.overlay;
    }
    model_events() {
        this.listenTo(this.model, 'change:position', this.updatePosition);
    }
    updatePosition() {
        const position = this.model.get('position');
        this.overlay.setPosition(position);
    }
}
exports.BaseOverlayView = BaseOverlayView;


/***/ }),

/***/ "./lib/fullscreen.js":
/*!***************************!*\
  !*** ./lib/fullscreen.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FullScreenView = exports.FullScreenModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const basecontrol_1 = __webpack_require__(/*! ./basecontrol */ "./lib/basecontrol.js");
const FullScreen_js_1 = __importDefault(__webpack_require__(/*! ol/control/FullScreen.js */ "./node_modules/ol/control/FullScreen.js"));
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
class FullScreenModel extends basecontrol_1.BaseControlModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: FullScreenModel.model_name, _model_module: FullScreenModel.model_module, _model_module_version: FullScreenModel.model_module_version, _view_name: FullScreenModel.view_name, _view_module: FullScreenModel.view_module, _view_module_version: FullScreenModel.view_module_version });
    }
}
exports.FullScreenModel = FullScreenModel;
FullScreenModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
FullScreenModel.model_name = 'FullScreenModel';
FullScreenModel.model_module = version_1.MODULE_NAME;
FullScreenModel.model_module_version = version_1.MODULE_VERSION;
FullScreenModel.view_name = 'FullScreenView';
FullScreenModel.view_module = version_1.MODULE_NAME;
FullScreenModel.view_module_version = version_1.MODULE_VERSION;
class FullScreenView extends basecontrol_1.BaseControlView {
    createObj() {
        this.obj = new FullScreen_js_1.default({
            className: 'ol-full-screen',
        });
    }
}
exports.FullScreenView = FullScreenView;


/***/ }),

/***/ "./lib/geojson.js":
/*!************************!*\
  !*** ./lib/geojson.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OpenLayersGeoJSONView = exports.OpenLayersGeoJSONModel = void 0;
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
const GeoJSON_js_1 = __importDefault(__webpack_require__(/*! ol/format/GeoJSON.js */ "./node_modules/ol/format/GeoJSON.js"));
const style_js_1 = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
const source_js_1 = __webpack_require__(/*! ol/source.js */ "./node_modules/ol/source.js");
const layer_js_1 = __webpack_require__(/*! ol/layer.js */ "./node_modules/ol/layer.js");
const layer_1 = __webpack_require__(/*! ./layer */ "./lib/layer.js");
class OpenLayersGeoJSONModel extends layer_1.LayerModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: OpenLayersGeoJSONModel.model_name, _model_module: OpenLayersGeoJSONModel.model_module, _model_module_version: OpenLayersGeoJSONModel.model_module_version, _view_name: OpenLayersGeoJSONModel.view_name, _view_module: OpenLayersGeoJSONModel.view_module, _view_module_version: OpenLayersGeoJSONModel.view_module_version, layers: [] });
    }
}
exports.OpenLayersGeoJSONModel = OpenLayersGeoJSONModel;
OpenLayersGeoJSONModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
OpenLayersGeoJSONModel.model_name = 'OpenLayersGeoJSONModel';
OpenLayersGeoJSONModel.model_module = version_1.MODULE_NAME;
OpenLayersGeoJSONModel.model_module_version = version_1.MODULE_VERSION;
OpenLayersGeoJSONModel.view_name = 'OpenLayersGeoJSONView';
OpenLayersGeoJSONModel.view_module = version_1.MODULE_NAME;
OpenLayersGeoJSONModel.view_module_version = version_1.MODULE_VERSION;
class OpenLayersGeoJSONView extends layer_1.LayerView {
    constructor() {
        super(...arguments);
        this.invisibleStyle = new style_js_1.Style({
            fill: new style_js_1.Fill({ color: 'rgba(0, 0, 0, 0)' }),
            stroke: new style_js_1.Stroke({ color: 'rgba(0, 0, 0, 0)', width: 0 }),
        });
    }
    render() {
        this.initVectorLayer();
        this.create_obj();
        this.modelEvents();
    }
    create_obj() {
        this.obj = this.vectorLayer;
    }
    initVectorLayer() {
        this.vectorSource = new source_js_1.Vector({
            features: new GeoJSON_js_1.default().readFeatures(this.model.get('data')),
        });
        this.vectorLayer = new layer_js_1.Vector({
            source: this.vectorSource,
            style: this.createStyleFunction(),
        });
    }
    createStyleFunction() {
        const modelStyle = this.model.get('style') || {};
        return (feature) => {
            return new style_js_1.Style({
                stroke: new style_js_1.Stroke({
                    color: modelStyle.strokeColor || '#3399CC',
                    width: modelStyle.strokeWidth || 1.25,
                }),
                fill: new style_js_1.Fill({
                    color: modelStyle.fillColor || 'rgba(255, 255, 255, 0.4)',
                }),
                image: new style_js_1.Circle({
                    radius: modelStyle.pointRadius || 5,
                    fill: new style_js_1.Fill({
                        color: modelStyle.pointFillColor || '#FF0000',
                    }),
                    stroke: new style_js_1.Stroke({
                        color: modelStyle.pointStrokeColor || '#000000',
                        width: modelStyle.pointStrokeWidth || 1,
                    }),
                }),
            });
        };
    }
    updateStyle() {
        this.vectorLayer.setStyle(this.createStyleFunction());
    }
    updateVisibility() {
        const visibility = this.model.get('visible');
        this.vectorSource.getFeatures().forEach((feature) => {
            feature.setStyle(visibility ? undefined : this.invisibleStyle);
        });
    }
    updateData() {
        this.vectorSource.clear();
        this.vectorSource.addFeatures(new GeoJSON_js_1.default().readFeatures(this.model.get('data')));
    }
    modelEvents() {
        this.listenTo(this.model, 'change:style', this.updateStyle);
        this.listenTo(this.model, 'change:data', this.updateData);
        this.listenTo(this.model, 'change:visible', this.updateVisibility);
    }
}
exports.OpenLayersGeoJSONView = OpenLayersGeoJSONView;


/***/ }),

/***/ "./lib/geotifflayer.js":
/*!*****************************!*\
  !*** ./lib/geotifflayer.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeoTIFFTileLayerView = exports.GeoTIFFTileLayerModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const WebGLTile_js_1 = __importDefault(__webpack_require__(/*! ol/layer/WebGLTile.js */ "./node_modules/ol/layer/WebGLTile.js"));
const GeoTIFF_js_1 = __importDefault(__webpack_require__(/*! ol/source/GeoTIFF.js */ "./node_modules/ol/source/GeoTIFF.js"));
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
const layer_1 = __webpack_require__(/*! ./layer */ "./lib/layer.js");
class GeoTIFFTileLayerModel extends layer_1.LayerModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: GeoTIFFTileLayerModel.model_name, _model_module: GeoTIFFTileLayerModel.model_module, _model_module_version: GeoTIFFTileLayerModel.model_module_version, _view_name: GeoTIFFTileLayerModel.view_name, _view_module: GeoTIFFTileLayerModel.view_module, _view_module_version: GeoTIFFTileLayerModel.view_module_version, url: '' });
    }
}
exports.GeoTIFFTileLayerModel = GeoTIFFTileLayerModel;
GeoTIFFTileLayerModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
GeoTIFFTileLayerModel.model_name = 'GeoTIFFTileLayerModel';
GeoTIFFTileLayerModel.model_module = version_1.MODULE_NAME;
GeoTIFFTileLayerModel.model_module_version = version_1.MODULE_VERSION;
GeoTIFFTileLayerModel.view_name = 'GeoTIFFTileLayerView';
GeoTIFFTileLayerModel.view_module = version_1.MODULE_NAME;
GeoTIFFTileLayerModel.view_module_version = version_1.MODULE_VERSION;
class GeoTIFFTileLayerView extends layer_1.LayerView {
    render() {
        super.render();
        this.sourcesChanged();
        this.model.on('change:url', this.sourcesChanged, this);
    }
    create_obj() {
        const url = this.model.get('url');
        if (url) {
            this.obj = new WebGLTile_js_1.default({
                source: new GeoTIFF_js_1.default({
                    sources: [{ url: url }],
                }),
            });
        }
    }
    sourcesChanged() {
        const newUrl = this.model.get('url');
        if (newUrl) {
            const newSource = new GeoTIFF_js_1.default({
                sources: [{ url: newUrl }],
            });
            this.obj.setSource(newSource);
        }
    }
}
exports.GeoTIFFTileLayerView = GeoTIFFTileLayerView;


/***/ }),

/***/ "./lib/heatmap.js":
/*!************************!*\
  !*** ./lib/heatmap.js ***!
  \************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeatmapLayerView = exports.HeatmapLayerModel = void 0;
const layer_1 = __webpack_require__(/*! ./layer */ "./lib/layer.js");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
const Heatmap_1 = __importDefault(__webpack_require__(/*! ol/layer/Heatmap */ "./node_modules/ol/layer/Heatmap.js"));
const source_1 = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
const Feature_1 = __importDefault(__webpack_require__(/*! ol/Feature */ "./node_modules/ol/Feature.js"));
const Point_1 = __importDefault(__webpack_require__(/*! ol/geom/Point */ "./node_modules/ol/geom/Point.js"));
class HeatmapLayerModel extends layer_1.LayerModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: HeatmapLayerModel.model_name, _model_module: HeatmapLayerModel.model_module, _model_module_version: HeatmapLayerModel.model_module_version, _view_name: HeatmapLayerModel.view_name, _view_module: HeatmapLayerModel.view_module, _view_module_version: HeatmapLayerModel.view_module_version, blur: 15, radius: 8, points: [] });
    }
}
exports.HeatmapLayerModel = HeatmapLayerModel;
HeatmapLayerModel.serializers = Object.assign({}, layer_1.LayerModel.serializers);
HeatmapLayerModel.model_name = 'HeatmapLayerModel';
HeatmapLayerModel.model_module = version_1.MODULE_NAME;
HeatmapLayerModel.model_module_version = version_1.MODULE_VERSION;
HeatmapLayerModel.view_name = 'HeatmapLayerView';
HeatmapLayerModel.view_module = version_1.MODULE_NAME;
HeatmapLayerModel.view_module_version = version_1.MODULE_VERSION;
class HeatmapLayerView extends layer_1.LayerView {
    render() {
        this.create_obj();
        this.modelEvents();
    }
    create_obj() {
        const source = new source_1.Vector({
            features: this.model
                .get('points')
                .map((point) => {
                const feature = new Feature_1.default(new Point_1.default([point[1], point[0]])); // Note: [lon, lat]
                feature.set('weight', point[2]);
                return feature;
            }),
        });
        this.obj = new Heatmap_1.default({
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
        const source = new source_1.Vector({
            features: this.model
                .get('points')
                .map((point) => {
                const feature = new Feature_1.default(new Point_1.default([point[1], point[0]])); // Note: [lon, lat]
                feature.set('weight', point[2]);
                return feature;
            }),
        });
        this.obj.setSource(source);
    }
}
exports.HeatmapLayerView = HeatmapLayerView;


/***/ }),

/***/ "./lib/imageoverlay.js":
/*!*****************************!*\
  !*** ./lib/imageoverlay.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageOverlayView = exports.ImageOverlayModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const baseoverlay_1 = __webpack_require__(/*! ./baseoverlay */ "./lib/baseoverlay.js");
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
class ImageOverlayModel extends baseoverlay_1.BaseOverlayModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: ImageOverlayModel.model_name, _model_module: ImageOverlayModel.model_module, _model_module_version: ImageOverlayModel.model_module_version, _view_name: ImageOverlayModel.view_name, _view_module: ImageOverlayModel.view_module, _view_module_version: ImageOverlayModel.view_module_version, image_url: '' });
    }
}
exports.ImageOverlayModel = ImageOverlayModel;
ImageOverlayModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
ImageOverlayModel.model_name = 'ImageOverlayModel';
ImageOverlayModel.model_module = version_1.MODULE_NAME;
ImageOverlayModel.model_module_version = version_1.MODULE_VERSION;
ImageOverlayModel.view_name = 'ImageOverlayView';
ImageOverlayModel.view_module = version_1.MODULE_NAME;
ImageOverlayModel.view_module_version = version_1.MODULE_VERSION;
class ImageOverlayView extends baseoverlay_1.BaseOverlayView {
    render() {
        super.render();
        this.updateImageElement();
    }
    createElement() {
        this.element = document.createElement('img');
    }
    model_events() {
        super.model_events();
        this.listenTo(this.model, 'change:image_url', this.updateImageElement);
    }
    updateImageElement() {
        const imageUrl = this.model.get('image_url');
        if (imageUrl) {
            this.element.src = imageUrl;
        }
    }
}
exports.ImageOverlayView = ImageOverlayView;


/***/ }),

/***/ "./lib/layer.js":
/*!**********************!*\
  !*** ./lib/layer.js ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayerView = exports.LayerModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
class LayerModel extends base_1.WidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: LayerModel.model_name, _model_module: LayerModel.model_module, _model_module_version: LayerModel.model_module_version, _view_name: LayerModel.view_name, _view_module: LayerModel.view_module, _view_module_version: LayerModel.view_module_version, value: 'Hello World' });
    }
}
exports.LayerModel = LayerModel;
LayerModel.serializers = Object.assign({}, base_1.WidgetModel.serializers);
LayerModel.model_name = 'LayerModel';
LayerModel.model_module = version_1.MODULE_NAME;
LayerModel.model_module_version = version_1.MODULE_VERSION;
LayerModel.view_name = 'LayerView';
LayerModel.view_module = version_1.MODULE_NAME;
LayerModel.view_module_version = version_1.MODULE_VERSION;
class LayerView extends base_1.WidgetView {
    render() {
        super.render();
        this.create_obj();
    }
}
exports.LayerView = LayerView;


/***/ }),

/***/ "./lib/mouseposition.js":
/*!******************************!*\
  !*** ./lib/mouseposition.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MousePositionView = exports.MousePositionModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const basecontrol_1 = __webpack_require__(/*! ./basecontrol */ "./lib/basecontrol.js");
const MousePosition_js_1 = __importDefault(__webpack_require__(/*! ol/control/MousePosition.js */ "./node_modules/ol/control/MousePosition.js"));
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
class MousePositionModel extends basecontrol_1.BaseControlModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: MousePositionModel.model_name, _model_module: MousePositionModel.model_module, _model_module_version: MousePositionModel.model_module_version, _view_name: MousePositionModel.view_name, _view_module: MousePositionModel.view_module, _view_module_version: MousePositionModel.view_module_version });
    }
}
exports.MousePositionModel = MousePositionModel;
MousePositionModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
MousePositionModel.model_name = 'MousePositionModel';
MousePositionModel.model_module = version_1.MODULE_NAME;
MousePositionModel.model_module_version = version_1.MODULE_VERSION;
MousePositionModel.view_name = 'MousePositionView';
MousePositionModel.view_module = version_1.MODULE_NAME;
MousePositionModel.view_module_version = version_1.MODULE_VERSION;
class MousePositionView extends basecontrol_1.BaseControlView {
    createObj() {
        this.obj = new MousePosition_js_1.default({
            className: 'ol-mouse-position',
        });
    }
}
exports.MousePositionView = MousePositionView;


/***/ }),

/***/ "./lib/popupoverlay.js":
/*!*****************************!*\
  !*** ./lib/popupoverlay.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PopupOverlayView = exports.PopupOverlayModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
const baseoverlay_1 = __webpack_require__(/*! ./baseoverlay */ "./lib/baseoverlay.js");
class PopupOverlayModel extends baseoverlay_1.BaseOverlayModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: PopupOverlayModel.model_name, _model_module: PopupOverlayModel.model_module, _model_module_version: PopupOverlayModel.model_module_version, _view_name: PopupOverlayModel.view_name, _view_module: PopupOverlayModel.view_module, _view_module_version: PopupOverlayModel.view_module_version });
    }
}
exports.PopupOverlayModel = PopupOverlayModel;
PopupOverlayModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
PopupOverlayModel.model_name = 'PopupOverlayModel';
PopupOverlayModel.model_module = version_1.MODULE_NAME;
PopupOverlayModel.model_module_version = version_1.MODULE_VERSION;
PopupOverlayModel.view_name = 'PopupOverlayView';
PopupOverlayModel.view_module = version_1.MODULE_NAME;
PopupOverlayModel.view_module_version = version_1.MODULE_VERSION;
class PopupOverlayView extends baseoverlay_1.BaseOverlayView {
    render() {
        super.render();
        this.updatePopupElement();
    }
    createElement() {
        this.element = document.createElement('div');
    }
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
}
exports.PopupOverlayView = PopupOverlayView;


/***/ }),

/***/ "./lib/rastertilelayer.js":
/*!********************************!*\
  !*** ./lib/rastertilelayer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RasterTileLayerView = exports.RasterTileLayerModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const WebGLTile_js_1 = __importDefault(__webpack_require__(/*! ol/layer/WebGLTile.js */ "./node_modules/ol/layer/WebGLTile.js"));
const XYZ_js_1 = __importDefault(__webpack_require__(/*! ol/source/XYZ.js */ "./node_modules/ol/source/XYZ.js"));
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
const layer_1 = __webpack_require__(/*! ./layer */ "./lib/layer.js");
class RasterTileLayerModel extends layer_1.LayerModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: RasterTileLayerModel.model_name, _model_module: RasterTileLayerModel.model_module, _model_module_version: RasterTileLayerModel.model_module_version, _view_name: RasterTileLayerModel.view_name, _view_module: RasterTileLayerModel.view_module, _view_module_version: RasterTileLayerModel.view_module_version, layers: [], url: '', attributions: [], tileSize: 256, max_zoom: 19, min_zoom: 0 });
    }
}
exports.RasterTileLayerModel = RasterTileLayerModel;
RasterTileLayerModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
RasterTileLayerModel.model_name = 'RasterTileLayerModel';
RasterTileLayerModel.model_module = version_1.MODULE_NAME;
RasterTileLayerModel.model_module_version = version_1.MODULE_VERSION;
RasterTileLayerModel.view_name = 'RasterTileLayerView';
RasterTileLayerModel.view_module = version_1.MODULE_NAME;
RasterTileLayerModel.view_module_version = version_1.MODULE_VERSION;
class RasterTileLayerView extends layer_1.LayerView {
    render() {
        super.render();
        this.urlChanged();
        this.model.on('change:url', this.urlChanged, this);
    }
    create_obj() {
        this.obj = this.tileLayer = new WebGLTile_js_1.default({
            source: new XYZ_js_1.default({
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
            const newSource = new XYZ_js_1.default({
                url: newUrl,
                attributions: this.model.get('attributions'),
                tileSize: this.model.get('tileSize'),
                maxZoom: this.model.get('max_zoom'),
                minZoom: this.model.get('min_zoom'),
            });
            this.tileLayer.setSource(newSource);
        }
    }
}
exports.RasterTileLayerView = RasterTileLayerView;


/***/ }),

/***/ "./lib/scaleline.js":
/*!**************************!*\
  !*** ./lib/scaleline.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ScaleLineView = exports.ScaleLineModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const basecontrol_1 = __webpack_require__(/*! ./basecontrol */ "./lib/basecontrol.js");
const ScaleLine_js_1 = __importDefault(__webpack_require__(/*! ol/control/ScaleLine.js */ "./node_modules/ol/control/ScaleLine.js"));
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
class ScaleLineModel extends basecontrol_1.BaseControlModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: ScaleLineModel.model_name, _model_module: ScaleLineModel.model_module, _model_module_version: ScaleLineModel.model_module_version, _view_name: ScaleLineModel.view_name, _view_module: ScaleLineModel.view_module, _view_module_version: ScaleLineModel.view_module_version });
    }
}
exports.ScaleLineModel = ScaleLineModel;
ScaleLineModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
ScaleLineModel.model_name = 'ScaleLineModel';
ScaleLineModel.model_module = version_1.MODULE_NAME;
ScaleLineModel.model_module_version = version_1.MODULE_VERSION;
ScaleLineModel.view_name = 'ScaleLineView';
ScaleLineModel.view_module = version_1.MODULE_NAME;
ScaleLineModel.view_module_version = version_1.MODULE_VERSION;
class ScaleLineView extends basecontrol_1.BaseControlView {
    createObj() {
        this.obj = new ScaleLine_js_1.default({
            className: 'ol-scale-line',
        });
    }
}
exports.ScaleLineView = ScaleLineView;


/***/ }),

/***/ "./lib/vectortilelayer.js":
/*!********************************!*\
  !*** ./lib/vectortilelayer.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VectorTileLayerView = exports.VectorTileLayerModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const VectorTile_1 = __importDefault(__webpack_require__(/*! ol/layer/VectorTile */ "./node_modules/ol/layer/VectorTile.js"));
const VectorTile_2 = __importDefault(__webpack_require__(/*! ol/source/VectorTile */ "./node_modules/ol/source/VectorTile.js"));
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
const layer_1 = __webpack_require__(/*! ./layer */ "./lib/layer.js");
const tilegrid_1 = __webpack_require__(/*! ol/tilegrid */ "./node_modules/ol/tilegrid.js");
const MVT_1 = __importDefault(__webpack_require__(/*! ol/format/MVT */ "./node_modules/ol/format/MVT.js"));
const GeoJSON_1 = __importDefault(__webpack_require__(/*! ol/format/GeoJSON */ "./node_modules/ol/format/GeoJSON.js"));
const TopoJSON_1 = __importDefault(__webpack_require__(/*! ol/format/TopoJSON */ "./node_modules/ol/format/TopoJSON.js"));
const style_js_1 = __webpack_require__(/*! ol/style.js */ "./node_modules/ol/style.js");
class VectorTileLayerModel extends layer_1.LayerModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: VectorTileLayerModel.model_name, _model_module: VectorTileLayerModel.model_module, _model_module_version: VectorTileLayerModel.model_module_version, _view_name: VectorTileLayerModel.view_name, _view_module: VectorTileLayerModel.view_module, _view_module_version: VectorTileLayerModel.view_module_version, features: [] });
    }
}
exports.VectorTileLayerModel = VectorTileLayerModel;
VectorTileLayerModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
VectorTileLayerModel.model_name = 'VectorTileLayerModel';
VectorTileLayerModel.model_module = version_1.MODULE_NAME;
VectorTileLayerModel.model_module_version = version_1.MODULE_VERSION;
VectorTileLayerModel.view_name = 'VectorTileLayerView';
VectorTileLayerModel.view_module = version_1.MODULE_NAME;
VectorTileLayerModel.view_module_version = version_1.MODULE_VERSION;
class VectorTileLayerView extends layer_1.LayerView {
    render() {
        super.render();
        this.model.on('change:url', this.urlChanged, this);
        this.model.on('change:style', this.styleChanged, this);
        this.model.on('change:visible', this.visibilityChanged, this);
        this.model.on('change:opacity', this.opacityChanged, this);
        this.model.on('change:attribution', this.attributionChanged, this);
        this.model.on('change:max_zoom', this.maxZoomChanged, this);
        this.model.on('change:min_zoom', this.minZoomChanged, this);
    }
    create_obj() {
        this.urlChanged();
        this.styleChanged();
        this.visibilityChanged();
        this.opacityChanged();
        this.attributionChanged();
        this.maxZoomChanged();
        this.minZoomChanged();
    }
    urlChanged() {
        const newUrl = this.model.get('url');
        if (newUrl) {
            const sourceFormat = this.model.get('source_format') || { type: 'MVT' };
            let format;
            switch (sourceFormat.type) {
                case 'MVT':
                    format = new MVT_1.default({
                        layerName: sourceFormat.layer_name,
                        layers: sourceFormat.layers,
                    });
                    break;
                case 'GeoJSON':
                    format = new GeoJSON_1.default({
                        dataProjection: sourceFormat.dataProjection || 'EPSG:4326',
                        featureProjection: sourceFormat.featureProjection,
                        geometryName: sourceFormat.geometry_name,
                        extractGeometryName: sourceFormat.extractGeometryName || false,
                    });
                    break;
                case 'TopoJSON':
                    format = new TopoJSON_1.default({
                        dataProjection: sourceFormat.dataProjection || 'EPSG:4326',
                        layerName: sourceFormat.layer_name,
                        layers: sourceFormat.layers,
                    });
                    break;
                default:
                    format = new MVT_1.default({
                        layerName: sourceFormat.layer_name,
                        layers: sourceFormat.layers,
                    });
                    break;
            }
            const vectorTileSource = new VectorTile_2.default({
                format: format,
                url: newUrl,
                tileGrid: (0, tilegrid_1.createXYZ)({ maxZoom: 19 }),
                attributions: this.model.get('attribution'),
                maxZoom: this.model.get('max_zoom'),
                minZoom: this.model.get('min_zoom'),
            });
            if (this.obj) {
                this.obj.setSource(vectorTileSource);
            }
            else {
                this.obj = new VectorTile_1.default({
                    source: vectorTileSource,
                    visible: this.model.get('visible'),
                    opacity: this.model.get('opacity'),
                    style: this.createStyleFunction(),
                });
            }
        }
    }
    visibilityChanged() {
        const visible = this.model.get('visible');
        if (this.obj) {
            this.obj.setVisible(visible);
        }
    }
    opacityChanged() {
        const opacity = this.model.get('opacity');
        if (this.obj) {
            this.obj.setOpacity(opacity);
        }
    }
    attributionChanged() {
        const attribution = this.model.get('attribution');
        if (this.obj) {
            const source = this.obj.getSource();
            if (source) {
                source.setAttributions(attribution);
            }
        }
    }
    maxZoomChanged() {
        const maxZoom = this.model.get('max_zoom');
        if (this.obj) {
            const source = this.obj.getSource();
            if (source) {
                source.set('maxZoom', maxZoom);
            }
        }
    }
    minZoomChanged() {
        const minZoom = this.model.get('min_zoom');
        if (this.obj) {
            const source = this.obj.getSource();
            if (source) {
                source.set('minZoom', minZoom);
            }
        }
    }
    styleChanged() {
        if (this.obj) {
            const styleFunction = this.createStyleFunction();
            this.obj.setStyle(styleFunction);
        }
    }
    createStyleFunction() {
        const modelStyle = this.model.get('style') || {};
        return (feature) => {
            return new style_js_1.Style({
                stroke: new style_js_1.Stroke({
                    color: modelStyle.strokeColor || '#3399CC',
                    width: modelStyle.strokeWidth || 1.25,
                }),
                fill: new style_js_1.Fill({
                    color: modelStyle.fillColor || 'rgba(255, 255, 255, 0.4)',
                }),
                image: new style_js_1.Circle({
                    radius: modelStyle.pointRadius || 5,
                    fill: new style_js_1.Fill({
                        color: modelStyle.pointFillColor || '#0000FF',
                    }),
                    stroke: new style_js_1.Stroke({
                        color: modelStyle.pointStrokeColor || '#000000',
                        width: modelStyle.pointStrokeWidth || 1,
                    }),
                }),
            });
        };
    }
}
exports.VectorTileLayerView = VectorTileLayerView;


/***/ }),

/***/ "./lib/version.js":
/*!************************!*\
  !*** ./lib/version.js ***!
  \************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MODULE_NAME = exports.MODULE_VERSION = void 0;
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
// eslint-disable-next-line @typescript-eslint/no-var-requires
const data = __webpack_require__(/*! ../package.json */ "./package.json");
/**
 * The _model_module_version/_view_module_version this package implements.
 *
 * The html widget manager assumes that this is the same as the npm package
 * version number.
 */
exports.MODULE_VERSION = data.version;
/*
 * The current package name.
 */
exports.MODULE_NAME = data.name;


/***/ }),

/***/ "./lib/video_overlay.js":
/*!******************************!*\
  !*** ./lib/video_overlay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VideoOverlayView = exports.VideoOverlayModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
const baseoverlay_1 = __webpack_require__(/*! ./baseoverlay */ "./lib/baseoverlay.js");
class VideoOverlayModel extends baseoverlay_1.BaseOverlayModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: VideoOverlayModel.model_name, _model_module: VideoOverlayModel.model_module, _model_module_version: VideoOverlayModel.model_module_version, _view_name: VideoOverlayModel.view_name, _view_module: VideoOverlayModel.view_module, _view_module_version: VideoOverlayModel.view_module_version });
    }
}
exports.VideoOverlayModel = VideoOverlayModel;
VideoOverlayModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
VideoOverlayModel.model_name = 'VideoOverlayModel';
VideoOverlayModel.model_module = version_1.MODULE_NAME;
VideoOverlayModel.model_module_version = version_1.MODULE_VERSION;
VideoOverlayModel.view_name = 'VideoOverlayVIew';
VideoOverlayModel.view_module = version_1.MODULE_NAME;
VideoOverlayModel.view_module_version = version_1.MODULE_VERSION;
class VideoOverlayView extends baseoverlay_1.BaseOverlayView {
    render() {
        super.render();
        this.updateVideoElement();
    }
    createElement() {
        this.element = document.createElement('div');
        this.videoElement = document.createElement('video');
        this.videoElement.controls = true;
        this.element.appendChild(this.videoElement);
    }
    model_events() {
        super.model_events();
        this.listenTo(this.model, 'change:video_url', this.updateVideoElement);
    }
    updateVideoElement() {
        const videoUrl = this.model.get('video_url');
        if (videoUrl) {
            this.videoElement.src = videoUrl;
        }
    }
}
exports.VideoOverlayView = VideoOverlayView;


/***/ }),

/***/ "./lib/widget.js":
/*!***********************!*\
  !*** ./lib/widget.js ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapView = exports.MapModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const Tile_1 = __importDefault(__webpack_require__(/*! ol/layer/Tile */ "./node_modules/ol/layer/Tile.js"));
const ol_1 = __webpack_require__(/*! ol */ "webpack/sharing/consume/default/ol/ol");
const View_1 = __importDefault(__webpack_require__(/*! ol/View */ "./node_modules/ol/View.js"));
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
const proj_1 = __webpack_require__(/*! ol/proj */ "./node_modules/ol/proj.js");
const source_1 = __webpack_require__(/*! ol/source */ "./node_modules/ol/source.js");
__exportStar(__webpack_require__(/*! ./imageoverlay */ "./lib/imageoverlay.js"), exports);
__exportStar(__webpack_require__(/*! ./geojson */ "./lib/geojson.js"), exports);
__exportStar(__webpack_require__(/*! ./video_overlay */ "./lib/video_overlay.js"), exports);
__exportStar(__webpack_require__(/*! ./popupoverlay */ "./lib/popupoverlay.js"), exports);
__exportStar(__webpack_require__(/*! ./zoomslider */ "./lib/zoomslider.js"), exports);
__exportStar(__webpack_require__(/*! ./fullscreen */ "./lib/fullscreen.js"), exports);
__exportStar(__webpack_require__(/*! ./scaleline */ "./lib/scaleline.js"), exports);
__exportStar(__webpack_require__(/*! ./mouseposition */ "./lib/mouseposition.js"), exports);
__exportStar(__webpack_require__(/*! ./heatmap */ "./lib/heatmap.js"), exports);
__exportStar(__webpack_require__(/*! ./rastertilelayer */ "./lib/rastertilelayer.js"), exports);
__exportStar(__webpack_require__(/*! ./geotifflayer */ "./lib/geotifflayer.js"), exports);
__exportStar(__webpack_require__(/*! ./vectortilelayer */ "./lib/vectortilelayer.js"), exports);
const DEFAULT_LOCATION = [0.0, 0.0];
class MapModel extends base_1.DOMWidgetModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: MapModel.model_name, _model_module: MapModel.model_module, _model_module_version: MapModel.model_module_version, _view_name: MapModel.view_name, _view_module: MapModel.view_module, _view_module_version: MapModel.view_module_version, layers: [], controls: [], overlays: [], zoom: 2, center: DEFAULT_LOCATION });
    }
}
exports.MapModel = MapModel;
MapModel.serializers = Object.assign(Object.assign({}, base_1.DOMWidgetModel.serializers), { layers: { deserialize: base_1.unpack_models }, overlays: { deserialize: base_1.unpack_models }, controls: { deserialize: base_1.unpack_models } });
MapModel.model_name = 'MapModel';
MapModel.model_module = version_1.MODULE_NAME;
MapModel.model_module_version = version_1.MODULE_VERSION;
MapModel.view_name = 'MapView';
MapModel.view_module = version_1.MODULE_NAME;
MapModel.view_module_version = version_1.MODULE_VERSION;
class MapView extends base_1.DOMWidgetView {
    render() {
        (0, proj_1.useGeographic)();
        this.el.classList.add('jupyter-widgets');
        this.el.classList.add('ipyopenlayer-widgets');
        this.map_container = document.createElement('div');
        this.map_container.classList.add('ol-container');
        requestAnimationFrame(() => {
            const parentElement = this.el.parentElement;
            if (parentElement) {
                parentElement.classList.add('ipyopenlayer-map-container-wrapper');
                const grandParentElement = parentElement.parentElement;
                if (grandParentElement) {
                    grandParentElement.classList.add('ipyopenlayer-map-container-wrapper-parent');
                }
            }
        });
        this.el.appendChild(this.map_container);
        this.layerViews = new base_1.ViewList(this.addLayerModel, this.removeLayerView, this);
        this.overlayViews = new base_1.ViewList(this.addOverlayModel, this.removeOverlayView, this);
        this.controlViews = new base_1.ViewList(this.addControlModel, this.removeControlView, this);
        this.map = new ol_1.Map({
            target: this.map_container,
            view: new View_1.default({
                center: this.model.get('center'),
                zoom: this.model.get('zoom'),
            }),
            layers: [
                new Tile_1.default({
                    source: new source_1.OSM(),
                }),
            ],
        });
        this.map.getView().on('change:center', () => {
            this.model.set('center', this.map.getView().getCenter());
            this.model.save_changes();
        });
        this.map
            .getView()
            .on('change:resolution', (event) => {
            this.model.set('zoom', this.map.getView().getZoom());
            this.model.save_changes();
        });
        this.layersChanged();
        this.overlayChanged();
        this.controlChanged();
        this.model.on('change:layers', this.layersChanged, this);
        this.model.on('change:overlays', this.overlayChanged, this);
        this.model.on('change:controls', this.controlChanged, this);
        this.model.on('change:zoom', this.zoomChanged, this);
        this.model.on('change:center', this.centerChanged, this);
    }
    layersChanged() {
        const layers = this.model.get('layers');
        this.layerViews.update(layers);
    }
    overlayChanged() {
        const overlay = this.model.get('overlays');
        this.overlayViews.update(overlay);
    }
    controlChanged() {
        const control = this.model.get('controls');
        this.controlViews.update(control);
    }
    zoomChanged() {
        const newZoom = this.model.get('zoom');
        if (newZoom !== undefined && newZoom !== null) {
            this.map.getView().setZoom(newZoom);
        }
    }
    centerChanged() {
        const newCenter = this.model.get('center');
        if (newCenter !== undefined && newCenter !== null) {
            this.map.getView().setCenter(newCenter);
        }
    }
    removeLayerView(child_view) {
        this.map.removeLayer(child_view.obj);
        child_view.remove();
    }
    removeOverlayView(child_view) {
        if (child_view.overlay) {
            this.map.removeOverlay(child_view.overlay);
        }
        child_view.remove();
    }
    removeControlView(child_view) {
        this.map.removeControl(child_view.obj);
        child_view.remove();
    }
    addLayerModel(child_model) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = yield this.create_child_view(child_model, {
                map_view: this,
            });
            this.map.addLayer(view.obj);
            this.displayed.then(() => {
                view.trigger('displayed', this);
            });
            return view;
        });
    }
    addOverlayModel(child_model) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = yield this.create_child_view(child_model, {
                map_view: this,
            });
            this.map.addOverlay(view.overlay);
            this.displayed.then(() => {
                view.trigger('displayed', this);
            });
            return view;
        });
    }
    addControlModel(child_model) {
        return __awaiter(this, void 0, void 0, function* () {
            const view = yield this.create_child_view(child_model, {
                map_view: this,
            });
            if (view.obj) {
                this.map.addControl(view.obj);
                this.displayed.then(() => {
                    view.trigger('displayed', this);
                });
            }
            return view;
        });
    }
}
exports.MapView = MapView;


/***/ }),

/***/ "./lib/zoomslider.js":
/*!***************************!*\
  !*** ./lib/zoomslider.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ZoomSliderView = exports.ZoomSliderModel = void 0;
// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
const base_1 = __webpack_require__(/*! @jupyter-widgets/base */ "webpack/sharing/consume/default/@jupyter-widgets/base");
const basecontrol_1 = __webpack_require__(/*! ./basecontrol */ "./lib/basecontrol.js");
const ZoomSlider_1 = __importDefault(__webpack_require__(/*! ol/control/ZoomSlider */ "./node_modules/ol/control/ZoomSlider.js"));
__webpack_require__(/*! ol/ol.css */ "./node_modules/ol/ol.css");
const version_1 = __webpack_require__(/*! ./version */ "./lib/version.js");
__webpack_require__(/*! ../css/widget.css */ "./css/widget.css");
class ZoomSliderModel extends basecontrol_1.BaseControlModel {
    defaults() {
        return Object.assign(Object.assign({}, super.defaults()), { _model_name: ZoomSliderModel.model_name, _model_module: ZoomSliderModel.model_module, _model_module_version: ZoomSliderModel.model_module_version, _view_name: ZoomSliderModel.view_name, _view_module: ZoomSliderModel.view_module, _view_module_version: ZoomSliderModel.view_module_version });
    }
}
exports.ZoomSliderModel = ZoomSliderModel;
ZoomSliderModel.serializers = Object.assign({}, base_1.DOMWidgetModel.serializers);
ZoomSliderModel.model_name = 'ZoomSliderModel';
ZoomSliderModel.model_module = version_1.MODULE_NAME;
ZoomSliderModel.model_module_version = version_1.MODULE_VERSION;
ZoomSliderModel.view_name = 'ZoomSliderView';
ZoomSliderModel.view_module = version_1.MODULE_NAME;
ZoomSliderModel.view_module_version = version_1.MODULE_VERSION;
class ZoomSliderView extends basecontrol_1.BaseControlView {
    createObj() {
        this.obj = new ZoomSlider_1.default({
            className: 'ol-zoomslider',
        });
    }
}
exports.ZoomSliderView = ZoomSliderView;


/***/ }),

/***/ "./css/widget.css":
/*!************************!*\
  !*** ./css/widget.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/@jupyterlab/builder/node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_jupyterlab_builder_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/@jupyterlab/builder/node_modules/css-loader/dist/cjs.js!./widget.css */ "./node_modules/@jupyterlab/builder/node_modules/css-loader/dist/cjs.js!./css/widget.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_jupyterlab_builder_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_jupyterlab_builder_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_jupyterlab_builder_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_jupyterlab_builder_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_jupyterlab_builder_node_modules_css_loader_dist_cjs_js_widget_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "?4a81":
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?b1b2":
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?30a5":
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "?bb58":
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"name":"ipyopenlayers","version":"0.1.0","description":"OpenLayers Jupyter Widget","keywords":["jupyter","jupyterlab","jupyterlab-extension","widgets"],"files":["lib/**/*.js","dist/*.js","css/*.css"],"homepage":"https://github.com/QuantStack/ipyopenlayers","bugs":{"url":"https://github.com/QuantStack/ipyopenlayers/issues"},"license":"BSD-3-Clause","author":{"name":"QuantStack","email":"me@me.com"},"main":"lib/index.js","types":"./lib/index.d.ts","repository":{"type":"git","url":"https://github.com/QuantStack/ipyopenlayers"},"scripts":{"build":"jlpm run build:lib && jlpm run build:nbextension && jlpm run build:labextension:dev","build:prod":"jlpm run build:lib && jlpm run build:nbextension && jlpm run build:labextension","build:labextension":"jupyter labextension build .","build:labextension:dev":"jupyter labextension build --development True .","build:lib":"tsc","build:nbextension":"webpack","clean":"jlpm run clean:lib && jlpm run clean:nbextension && jlpm run clean:labextension","clean:lib":"rimraf lib","clean:labextension":"rimraf ipyopenlayers/labextension","clean:nbextension":"rimraf ipyopenlayers/nbextension/static/index.js","lint":"eslint . --ext .ts,.tsx --fix","lint:check":"eslint . --ext .ts,.tsx","prepack":"jlpm run build:lib","test":"jest","watch":"npm-run-all -p watch:*","watch:lib":"tsc -w","watch:nbextension":"webpack --watch --mode=development","watch:labextension":"jupyter labextension watch ."},"dependencies":{"@jupyter-widgets/base":"^1.1.10 || ^2 || ^3 || ^4 || ^5 || ^6","ol":"^9.1.0"},"devDependencies":{"@babel/core":"^7.23.7","@babel/preset-env":"^7.23.8","@jupyter-widgets/base-manager":"^1.0.7","@jupyterlab/builder":"^4.0.11","@lumino/application":"^2.3.0","@lumino/widgets":"^2.3.1","@types/jest":"^29.5.11","@types/webpack-env":"^1.18.4","@typescript-eslint/eslint-plugin":"^6.19.1","@typescript-eslint/parser":"^6.19.1","acorn":"^8.11.3","css-loader":"^7.1.2","eslint":"^8.56.0","eslint-config-prettier":"^9.1.0","eslint-plugin-prettier":"^5.1.3","fs-extra":"^11.2.0","identity-obj-proxy":"^3.0.0","jest":"^29.7.0","mkdirp":"^3.0.1","npm-run-all":"^4.1.5","prettier":"^3.2.4","rimraf":"^5.0.5","source-map-loader":"^5.0.0","style-loader":"^4.0.0","ts-jest":"^29.1.2","ts-loader":"^9.5.1","typescript":"~5.3.3","webpack":"^5.93.0","webpack-cli":"^5.1.4"},"devDependenciesComments":{"@jupyterlab/builder":"pinned to the latest JupyterLab 3.x release","@lumino/application":"pinned to the latest Lumino 1.x release","@lumino/widgets":"pinned to the latest Lumino 1.x release"},"jupyterlab":{"extension":"lib/plugin","outputDir":"ipyopenlayers/labextension/","sharedPackages":{"@jupyter-widgets/base":{"bundled":false,"singleton":true}}}}');

/***/ })

}]);
//# sourceMappingURL=lib_widget_js.86e86f9e8d12d72831cf.js.map