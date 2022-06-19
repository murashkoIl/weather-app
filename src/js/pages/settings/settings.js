import { clearPage } from '../../../helpers/dom';
import {
	saveLocalStorageData,
	getLocalStorageData,
} from '../../../helpers/localstorage';
import { renderHandler } from '../../../helpers/render';
import { settingsPageTemplate } from '../../../templates/settings.template';
import { Observer } from '../../../helpers/observer';
import { createBlock } from '../../../helpers/dom';
import { emitter } from '../../../helpers/emitter';
import { hideLoader, displayLoader } from '../loader';
import {
	getCityTemperatureWrapper,
	getContent,
	getSettingsWrapper,
	getWeatherInfoWindWrapper,
	getWrapper,
} from '../../../helpers/selectors';

export const settingsObserver = new Observer();
export const themeObserver = new Observer();

export const renderSettingsPage = data => {
	const storage = getLocalStorageData();
	return settingsPageTemplate(storage, data);
};

export const constructSettingsPage = () => {
	const settingsHtmlObject = createBlock('div', 'settings-wrapper');

	const unsbuscribe = emitter.subscribe('receiveCurrentCity', data => {
		settingsHtmlObject.innerHTML = renderHandler(renderSettingsPage, data);

		hideLoader();
		unsbuscribe();
	});
	emitter.emit('getCurrentCity', { city: 'auto:ip' });

	return settingsHtmlObject;
};

export const settingsPage = () => {
	clearPage();
	displayLoader();

	getContent().appendChild(constructSettingsPage());
	window.scrollTo(0, 0);

	checkingSettingsPageRendering();
};

export const settingsHandler = event => {
	const e = event.target;
	const storage = getLocalStorageData();
	if (e.classList.contains('choice-temperature')) {
		choiceTemperatureHandler(e, storage);
	} else if (e.classList.contains('choice-wind')) {
		choiceWindHandler(e, storage);
	} else if (e.classList.contains('choice-theme')) {
		choiceThemeHandler(e, storage);
	}

	saveLocalStorageData(storage);
	themeObserver.trigger();
	settingsObserver.trigger();
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
	`;
};

export const renderTemperature = data => {
	const storage = getLocalStorageData();
	return `
		<div class="city-temperature">${
			storage.isCelcius ? data.current.temp_c : data.current.temp_f
		}º</div>
	`;
};

export const fetchTemperature = () => {
	const unsbuscribe = emitter.subscribe('receiveCurrentCity', data => {
		getCityTemperatureWrapper().innerHTML = renderHandler(
			renderTemperature,
			data
		);
		unsbuscribe();
	});
	emitter.emit('getCurrentCity', { city: 'auto:ip' });
};

export const fetchWindSpeed = () => {
	const unsbuscribe = emitter.subscribe('receiveCurrentCity', data => {
		getWeatherInfoWindWrapper().innerHTML = renderHandler(
			renderWindSpeed,
			data
		);
		unsbuscribe();
	});
	emitter.emit('getCurrentCity', { city: 'auto:ip' });
};

const themeHandler = () => {
	const storage = getLocalStorageData();
	!storage.isDarkTheme
		? getWrapper().classList.add('light')
		: getWrapper().classList.remove('light');
};

const choiceWindHandler = (event, storage) => {
	if (event.textContent === 'km/h') {
		event.textContent = 'm/s';
		storage.isKPH = false;
	} else {
		event.textContent = 'km/h';
		storage.isKPH = true;
	}
};

const choiceThemeHandler = (event, storage) => {
	if (event.textContent === 'Dark') {
		event.textContent = 'Light';
		storage.isDarkTheme = false;
	} else {
		event.textContent = 'Dark';
		storage.isDarkTheme = true;
	}
};

const choiceTemperatureHandler = (event, storage) => {
	if (event.textContent === 'ºC') {
		event.textContent = 'ºF';
		storage.isCelcius = false;
	} else {
		event.textContent = 'ºC';
		storage.isCelcius = true;
	}
};

export const checkingSettingsPageRendering = () => {
	if (getSettingsWrapper()) {
		getSettingsWrapper().addEventListener('click', settingsHandler);
	}
};

themeObserver.subscribe(themeHandler);
settingsObserver.subscribe(fetchTemperature);
settingsObserver.subscribe(fetchWindSpeed);
