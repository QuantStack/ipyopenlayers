import Control from 'ol/control/Control';
import { getRenderPixel } from 'ol/render';
import 'ol/ol.css';
import '../css/widget.css';
import { MapView } from './widget';

// Interface for SplitMapControl options
interface SplitMapControlOptions {
  target?: string;
  map_view?: MapView;
  swipe_position?: number;
}

export default class SplitMapControl extends Control {
  swipe: HTMLInputElement;
  leftLayer: any;
  map_view: MapView;
  private _swipe_position: number;

  constructor(leftLayer: any, options: SplitMapControlOptions = {}) {
    const element = document.createElement('div');
    element.className = 'ol-unselectable ol-control split-map-control';

    super({
      element: element,
      target: options.target,
    });

    this.leftLayer = leftLayer;

    if (options.map_view) {
      this.map_view = options.map_view;
    } else {
      throw new Error('MapView is required for SplitMapControl.');
    }

    this._swipe_position = options.swipe_position ?? 0;

    const swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container';
    swiperContainer.style.width = '100%';

    this.swipe = document.createElement('input');
    this.swipe.type = 'range';
    this.swipe.className = 'swipe';
    this.swipe.style.width = '100%';
    this.updateSwipeValue();
    swiperContainer.appendChild(this.swipe);

    this.map_view.map_container.style.position = 'relative';
    this.map_view.map_container.appendChild(swiperContainer);

    const map_view = this.map_view;

    this.leftLayer.on('prerender', (event: any) => {
      const gl = event.context;
      gl.enable(gl.SCISSOR_TEST);

      const mapSize = map_view.getSize();

      if (mapSize) {
        const bottomLeft = getRenderPixel(event, [0, mapSize[1]]);
        const topRight = getRenderPixel(event, [mapSize[0], 0]);

        const width = Math.round(
          (topRight[0] - bottomLeft[0]) * (this._swipe_position / 100),
        );
        const height = topRight[1] - bottomLeft[1];

        gl.scissor(bottomLeft[0], bottomLeft[1], width, height);
      }
    });

    this.leftLayer.on('postrender', (event: any) => {
      const gl = event.context;
      gl.disable(gl.SCISSOR_TEST);
    });

    this.swipe.addEventListener('input', () => {
      this._swipe_position = parseInt(this.swipe.value, 10);
      this.updateSwipeValue();
      map_view.map.render();
    });
  }

  private updateSwipeValue() {
    if (this.swipe) {
      this.swipe.value = this._swipe_position.toString();
    }
  }
}
