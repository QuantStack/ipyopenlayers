// Copyright (c) QuantStack
// Distributed under the terms of the Modified BSD License.
import Control from 'ol/control/Control';
import { getRenderPixel } from 'ol/render';
import 'ol/ol.css';
import '../css/widget.css';
import { MapView } from './widget';

// Interface for SplitMapControl options
interface SplitMapControlOptions {
  target?: string;
  map_view?: MapView;
  swipe_position?: number; // Ajoutez swipe_position en tant que nombre
}
export default class SplitMapControl extends Control {
  swipe: HTMLInputElement;
  leftLayer: any;
  rightLayer: any;
  map_view: MapView;
  swipe_position: any;
  constructor(
    leftLayer: any,
    rightLayer: any,
    options: SplitMapControlOptions = {},
  ) {
    const element = document.createElement('div');
    element.className = 'ol-unselectable ol-control split-map-control';

    super({
      element: element,
      target: options.target,
    });

    this.leftLayer = leftLayer;
    this.rightLayer = rightLayer;

    console.log('Initializing SplitMapControl...');
    console.log(options);
    if (options.map_view) {
      this.map_view = options.map_view;
      console.log('MapView initialized:', this.map_view);
    } else {
      throw new Error('MapView is required for SplitMapControl.');
    }
    if (options.swipe_position) {
      this.swipe_position = options.swipe_position;
      console.log('swipe_position initialized:', this.swipe_position);
    } else {
      throw new Error('swipe_position is required for SplitMapControl.');
    }

    const swiperContainer = document.createElement('div');
    swiperContainer.className = 'swiper-container';

    this.swipe = document.createElement('input');
    this.swipe.type = 'range';
    this.swipe.className = 'swipe';
    (this.swipe.value = this.swipe_position),
      swiperContainer.appendChild(this.swipe);
    console.log('this.map_view.map_container', this.map_view.map_container);
    this.map_view.map_container.appendChild(swiperContainer);
    this.handleSwipe();
  }

  handleSwipe(event?: Event) {
    console.log('Handling swipe event...');
    console.log(this.swipe.value);
    if (!this.leftLayer.hasListener('prerender')) {
      console.log('1');
      this.leftLayer.on('prerender', this.prerender.bind(this));
    }

    if (!this.leftLayer.hasListener('postrender')) {
      console.log('2');
      //this.leftLayer.on('postrender', this.postrender.bind(this));
    }

    if (!this.rightLayer.hasListener('prerender')) {
      console.log('3');

      //this.rightLayer.on('prerender', this.prerender.bind(this));
    }

    if (!this.rightLayer.hasListener('postrender')) {
      console.log('4');

      this.rightLayer.on('postrender', this.postrender.bind(this));
    }

    console.log('ok');
  }

  prerender(event: any) {
    console.log('Prerender event triggered.');

    const gl = event.context; // Get WebGL context
    gl.enable(gl.SCISSOR_TEST); // Enable scissor test

    const mapSize = this.map_view.getSize(); // Get the size of the map
    if (!mapSize) {
      console.warn('Map size is undefined.');
      return;
    }

    // Get render pixels for the bottom left and top right corners
    const bottomLeft = getRenderPixel(event, [0, mapSize[1]]);
    const topRight = getRenderPixel(event, [mapSize[0], 0]);

    // Get the swipe value from the input element
    const swipeValue = this.swipe.value;
    console.log('swipeValue', swipeValue);

    // Calculate the width and height for the scissor test
    const width = Math.round(
      (topRight[0] - bottomLeft[0]) * (Number(swipeValue) / 100),
    );
    const height = topRight[1] - bottomLeft[1];

    // Define the scissor box
    gl.scissor(bottomLeft[0], bottomLeft[1], width, height);
  }

  postrender(event: any) {
    console.log('Postrender event triggered.');

    const gl = event.context; // Get WebGL context
    gl.disable(gl.SCISSOR_TEST); // Disable scissor test
  }
}
