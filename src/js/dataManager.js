import { renderHandler } from '../helpers/render';
import { emitter } from '../helpers/emitter';
import { renderCustomNotification } from './pages/error/error';
import { BASE_URL, getCities, getCurrentWeather } from './weather';

emitter.subscribe('getCurrentCity', ({ city }) => {
  getCurrentWeather(BASE_URL, city)
		.then(data => {
      emitter.emit('receiveCurrentCity', data);
		})
		.catch(err => renderHandler(renderCustomNotification, err));
});

emitter.subscribe('getCities', ({ city }) => {
	getCities(BASE_URL, city)
		.then(data => {
			emitter.emit('receiveCities', data);
		})
		.catch(err => renderHandler(renderCustomNotification, err));
});


