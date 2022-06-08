import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { getLocalStorageData, saveLocalStorageData, getElementBySelector, renderHandler } from '../helpers';
import { foundCitiesTemplate, savedCitiesTemplate, savedPageTemplate } from '../../templates/saved.template';

export const cityHandler = (arg, func) => {
	const storage = getLocalStorageData();
	storage.cards = func(arg, storage.cards);
	saveLocalStorageData(storage);
};

export const deleteCity = (city, cards) => {
	return [...cards.filter(card => card.city !== city)];
};

export const saveCity = (card, cards) => {
	return [...cards, card];
};

export const renderFoundCities = data => {
	return foundCitiesTemplate(data);
};

export const isCitiesRendered = () => {
	const citiesWrapper = getElementBySelector('.found-cities-wrapper');
	if (citiesWrapper) {
		citiesWrapper.remove();
	}
};

export const renderSavedPage = () => {
	return savedPageTemplate(renderSavedCities);
};

export const renderSavedCities = () => {
	const storage = updateCurrentWeather();
	return savedCitiesTemplate(storage);
};

export const updateCurrentWeather = () => {
	const storage = getLocalStorageData();

	storage.cards.forEach((card, index) => {
		getCurrentWeather(BASE_URL, card.city)
			.then(info => {
				const updatedCard = {
					city: info.location.name,
					country: info.location.country,
					temp_c: info.current.temp_c,
					temp_f: info.current.temp_f,
					icon: info.current.condition.icon,
					humidity: info.current.humidity,
					wind_kph: info.current.wind_kph,
					wind_mph: info.current.wind_mph,
				};
				storage.cards.splice(index, 1, updatedCard);
				return storage;
			})
			.then(storage => saveLocalStorageData(storage))
			.catch(err => renderHandler(renderCustomNotification, err));
	});
	return storage;
};
