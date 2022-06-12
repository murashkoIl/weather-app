import { renderHandler } from '../helpers/render';
import { emitter } from './emitter';
import { renderCustomNotification } from './error/error';
import { BASE_URL, getCities, getCurrentWeather } from './weather';

emitter.subscribe('getCurrentCity', (obj) => {
	getCurrentWeather(BASE_URL, obj.city)
		.then(data => {
			emitter.emit('receiveCurrentCity', { data: data, method: obj.method, html: obj.html });
		})
		.catch(err => renderHandler(renderCustomNotification, err));
});

emitter.subscribe('getCities', text => {
	getCities(BASE_URL, text)
		.then(data => {
			emitter.emit('receiveCities', data);
		})
		.catch(err => renderHandler(renderCustomNotification, err));
});

emitter.subscribe('receiveCurrentCity', obj => {
  obj.html.innerHTML = obj.method(obj.data);
});

emitter.subscribe('receiveCities', data => {
	console.log('receivedCities works ', data);
});
