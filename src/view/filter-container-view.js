import {createElement} from '../render.js';

function createFilterContainerTemplate() {
  return (
    `
    <div class="trip-controls__filters">
      <h2 class="visually-hidden">Filter events</h2>
	</div>
    `
  );
}

export default class FilterContainerView {
  getTemplate() {
    return createFilterContainerTemplate();
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
