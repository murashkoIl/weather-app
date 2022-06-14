import { getCurrentWeather, BASE_URL } from '../weather';
import { getElementBySelector } from './../../helpers/dom';
import {
	saveLocalStorageData,
	getLocalStorageData,
} from '../../helpers/localstorage';
import { renderHandler, renderLoader } from '../../helpers/render';
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

	const htmlObject = createBlock('div', 'loader-wrapper');
	htmlObject.innerHTML = renderHandler(renderLoader);
	emitter.emit('getCurrentCity', {city: 'auto:ip', method: renderSettingsPage});

  return htmlObject; 
};

export const settingsPage = () => {
  getElementBySelector('#content').appendChild(constructSettingsPage());
};

export const settingsHandler = event => {
	const e = event.target;
	const storage = getLocalStorageData();
	if (e.classList.contains('choice-temperature')) {
		choiceTemperatureHandler(e, storage)
	} else if (e.classList.contains('choice-wind')) {
		choiceWindHandler(e, storage);
	} else if (e.classList.contains('choice-theme')) {
		choiceThemeHandler(e, storage)
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

const choiceWindHandler = (event, storage) => {
	if (event.textContent === 'km/h') {
		event.textContent = 'm/s';
		storage.isKPH = false;
	} else {
		event.textContent = 'km/h';
		storage.isKPH = true;
	}
}

const choiceThemeHandler = (event, storage) => {
	if (event.textContent === 'Dark') {
		event.textContent = 'Light';
		storage.isDarkTheme = false;
	} else {
		event.textContent = 'Dark';
		storage.isDarkTheme = true;
	}
}

const choiceTemperatureHandler = (event, storage) => {
	if (event.textContent === 'ºC') {
		event.textContent = 'ºF';
		storage.isCelcius = false;
	} else {
		event.textContent = 'ºC';
		storage.isCelcius = true;
	}
}

export const checkingSettingsPageRendering = () => {
	if(getElementBySelector('.settings-wrapper')) {
		getElementBySelector('.settings').addEventListener('click', settingsHandler);
	}
}

themeObserver.subscribe(themeHandler);
settingsObserver.subscribe(fetchTemperature);
settingsObserver.subscribe(fetchWindSpeed);

