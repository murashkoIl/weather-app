import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { settingsObserver, themeObserver } from './../observer';
import { addHtmlToDom, getLocalStorageData, renderHandler, saveLocalStorageData, getElementBySelector } from '../helpers';
import { settingsPageTemplate } from '../../templates/settings.template';

export const renderSettingsPage = data => {
	const storage = getLocalStorageData();
	return settingsPageTemplate(storage, data);
};

export const constructSettingsPage = () => {
	getCurrentWeather(BASE_URL)
		.then(data => {
			addHtmlToDom(renderHandler(renderSettingsPage, data));
		})
		.then(() => {
			const settings = getElementBySelector('.settings-wrapper');
			settings.addEventListener('click', settingsHandler);
		})
		.catch(err => renderHandler(renderCustomNotification, err));
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
