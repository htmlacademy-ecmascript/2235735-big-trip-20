import Presenter from './presenter/presenter';

const headerTripContainer = document.querySelector('.trip-main');
const mainEventContainer = document.querySelector('.trip-events');
const presenter = new Presenter ({headerTripContainer : headerTripContainer, mainEventContainer : mainEventContainer});

presenter.init();
