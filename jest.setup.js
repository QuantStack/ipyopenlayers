// jest.setup.js
if (typeof DragEvent === 'undefined') {
  global.DragEvent = class DragEvent {
    constructor(type, eventInitDict) {
      this.type = type;
      this.bubbles = eventInitDict?.bubbles || false;
      this.cancelable = eventInitDict?.cancelable || false;
      this.dataTransfer = eventInitDict?.dataTransfer || null;
    }
  };
}
