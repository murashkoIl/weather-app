import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { addHtmlToDom, getElementBySelector } from './../../helpers/dom';
import {
	saveLocalStorageData,
	getLocalStorageData,
} from '../../helpers/localstorage';
import { renderHandler } from '../../helpers/render';
import { settingsPageTemplate } from '../../templates/settings.template';
import { Observer } from './../observer';
import { createBlock } from './../../helpers/dom'; 
import { emitter } from '../emitter';

export const settingsObserver = new Observer();
export const themeObserver = new Observer();

export const renderSettingsPage = data => {
	const storage = getLocalStorageData();
	return settingsPageTemplate(storage, data);
};

export const constructSettingsPage = () => {

	const htmlObject = createBlock('div', 'settings-page');
	emitter.emit('getCurrentCity', { city: 'auto:ip', method: renderSettingsPage, html: htmlObject});
	// htmlObject.innerHTML = renderHandler(renderSettingsPage, data);

	// const settings = getElementBySelector('.settings-wrapper');
	getElementBySelector('#content').addEventListener('click', settingsHandler);
  return htmlObject; 
};

export const settingsPage = () => {
  getElementBySelector('#content').appendChild(constructSettingsPage());
};

const settingsHandler = event => {
	const e = event.target;
	const storage = getLocalStorageData();
	if (e.classList.contains('choice-temperature')) {
		if (e.textContent === 'ºC') {
			e.textContent = 'ºF';
			storage.isCelcius = false;
		} else {
			e.textContent = 'ºC';
			storage.isCelcius = true;
		}
	} else if (e.classList.contains('choice-wind')) {
		if (e.textContent === 'km/h') {
			e.textContent = 'm/s';
			storage.isKPH = false;
		} else {
			e.textContent = 'km/h';
			storage.isKPH = true;
		}
	} else if (e.classList.contains('choice-theme')) {
		if (e.textContent === 'Dark') {
			e.textContent = 'Light';
			storage.isDarkTheme = false;
		} else {
			e.textContent = 'Dark';
			storage.isDarkTheme = true;
		}
	}
	saveLocalStorageData(storage);
	settingsObserver.trigger();
	themeObserver.trigger();
};

export const renderTemperature = data => {
	const storage = getLocalStorageData();
	return `
		<div class="city-temperature">${
			storage.isCelcius ? data.current.temp_c : data.current.temp_f
		}º</div>
	`;
};

export const renderWindSpeed = data => {
	const storage = getLocalStorageData();
	return `
		<div class="weather__info-wind-icon"><i class="fa-solid fa-wind"></i></div>
		<div class="weather__info-wind">${
			storage.isKPH
				? data.current.wind_kph + 'km/h'
				: data.current.wind_mph + 'm/s'
		}</div>
	`
}

export const fetchTemperature = () => {
	getCurrentWeather(BASE_URL)
		.then(data => renderTemperature(data))
		.then(
			str =>
				(getElementBySelector('.city-temperature-wrapper').innerHTML = str)
	);
};

export const fetchWindSpeed = () => {
	getCurrentWeather(BASE_URL)
		.then(data => renderWindSpeed(data))
		.then(
			str =>
				(getElementBySelector('.weather__info-wind-wrapper').innerHTML = str)
	);
}

const themeHandler = () => {
	const storage = getLocalStorageData();
	!storage.isDarkTheme
		? getElementBySelector('.wrapper').classList.add('light')
		: getElementBySelector('.wrapper').classList.remove('light');
};

themeObserver.subscribe(themeHandler);
settingsObserver.subscribe(fetchTemperature);
settingsObserver.subscribe(fetchWindSpeed);