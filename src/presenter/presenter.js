import {render, RenderPosition} from '../render.js';
import NewTaskButtonView from '../view/new-event-button-view.js';
import TripControlsContainerView from '../view/trip-controls-container-view.js';
import FilterFormView from '../view/filter-form-view.js';
import FilterContainerView from '../view/filter-container-view.js';
import SortFormView from '../view/sort-form-view.js';
import EventListView from '../view/event-list-view.js';
import EventView from '../view/event-view.js';
import EventEditFormView from '../view/event-edit-form-view.js';

export default class Presenter {
  tripControlsContainer = new TripControlsContainerView();
  filterContainer = new FilterContainerView();
  eventListContainer = new EventListView();

  constructor ({headerTripContainer, mainEventContainer}){
    this.headerTripContainer = headerTripContainer;
    this.mainEventContainer = mainEventContainer;
  }

  init() {
    render (this.tripControlsContainer, this.headerTripContainer);
    render(this.filterContainer, this.tripControlsContainer.getElement());
    render (new FilterFormView(), this.filterContainer.getElement());
    render(new NewTaskButtonView(), this.headerTripContainer);
    render (new SortFormView(), this.mainEventContainer);
    render (this.eventListContainer, this.mainEventContainer);
    for (let i = 0; i < 3; i++){
      render (new EventView(), this.eventListContainer.getElement());
    }
    render (new EventEditFormView(), this.eventListContainer.getElement(), RenderPosition.AFTERBEGIN);
  }
}
