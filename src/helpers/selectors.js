import { getElementBySelector } from './dom';

export const getContent = () => {
	return getElementBySelector('#content');
};

export const getInputSearch = () => {
	return getElementBySelector('.input-search');
};

export const getErrorWrapper = () => {
	return getElementBySelector('.error-wrapper');
};

export const getErrorClose = () => {
	return getElementBySelector('.error-close');
};

export const getHeaderReturn = () => {
	return getElementBySelector('.header-return');
};

export const getWrapper = () => {
	return getElementBySelector('.wrapper');
};

export const getSavedCitiesWrapper = () => {
	return getElementBySelector('.saved-cities-wrapper');
};

export const getSearchForm = () => {
	return getElementBySelector('.search-form');
};

export const getCityFound = () => {
	return getElementBySelector('.city-found');
};

export const getSearch = () => {
	return getElementBySelector('.search');
};

export const getFoundCitiesWrapper = () => {
	return getElementBySelector('.found-cities-wrapper');
};

export const getCityTemperatureWrapper = () => {
	return getElementBySelector('.city-temperature-wrapper');
};

export const getWeatherInfoWindWrapper = () => {
	return getElementBySelector('.weather__info-wind-wrapper');
};

export const getSettingsWrapper = () => {
	return getElementBySelector('.settings-wrapper');
};

export const getFooterContainer = () => {
	return getElementBySelector('.footer-container');
};

export const getActive = () => {
	return getElementBySelector('.active');
};

export const getLoader = () => {
	return getElementBySelector('.loader');
};
