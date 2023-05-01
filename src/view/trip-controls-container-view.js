import {createElement} from '../render.js';

function createTripControlsContainerTemplate() {
  return '<div class="trip-main__trip-controls  trip-controls"></div>';
}

export default class TripControlsContainerView {
  getTemplate() {
    return createTripControlsContainerTemplate();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }

    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
