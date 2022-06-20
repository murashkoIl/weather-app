import { renderCustomNotification } from '../error/error';
import {
	renderFoundCities,
	deleteCity,
	removeCitiesIfRendered,
	renderSavedPage,
	cityHandler,
	saveCity,
	renderSavedCities,
} from './savedRenders';

import {
	clearPage,
	createBlock,
	getElementBySelector,
	clearInputValue,
} from '../../../helpers/dom';
import { renderHandler } from '../../../helpers/render';
import { getLocalStorageData } from '../../../helpers/localstorage';
import { emitter } from '../../../helpers/emitter';
import { displayLoader, hideLoader } from '../loader';
import {
	getCityFound,
	getContent,
	getInputSearch,
	getSavedCitiesWrapper,
	getSearch,
	getSearchForm,
	getWrapper,
} from '../../../helpers/selectors';

export const toFocusInput = () => {
	getInputSearch().focus();
};

export const constructSavedPage = () => {
	const wrapper = getWrapper();

	const savedHtmlObject = createBlock('div', 'saved-page');
	const unsbuscribe = emitter.subscribe('receiveCurrentCity', data => {
		savedHtmlObject.innerHTML = renderHandler(renderSavedPage, data);

		addOnInputListener();
		wrapper.addEventListener('click', handleWrapperListener);

		hideLoader();
		unsbuscribe();
	});
	emitter.emit('getCurrentCity', { city: 'auto:ip' });

	return savedHtmlObject;
};

export const savedPage = () => {
	clearPage();
	displayLoader();
	getContent().appendChild(constructSavedPage());
	window.scrollTo(0, 0);
};

export const addOnInputListener = () => {
	if (getInputSearch()) {
		const inputSearch = getInputSearch();
		inputSearch.oninput = () => {
			searchHandler(inputSearch);
		};
	}
};

export const searchHandler = input => {
	removeCitiesIfRendered();

	if (input.value.length > 2) {
		const unsbuscribe = emitter.subscribe('receiveCities', data => {
			handleCityClick(data);
			console.log(data);
			unsbuscribe();
		});
		emitter.emit('getCities', { city: input.value });
	}
};

export const handleWrapperListener = event => {
	if (
		event.target.closest('.city') &&
		!event.target.classList.contains('city-delete')
	) {
		let newLocation = '#city' + `/${event.target.closest('.city').dataset.id}`;
		document.location.assign(newLocation);
	}
	if (!event.target.classList.contains('found-cities-wrapper')) {
		removeCitiesIfRendered();
	}
	if (event.target.classList.contains('city-delete')) {
		cityHandler(event.target.dataset.id, deleteCity);

		const savedCitiesWrapper = getElementBySelector('.saved-cities-wrapper');
		rerenderSavedCities(savedCitiesWrapper, renderSavedCities());
	}
	if (event.target.closest('.city-found')) {
		foundCityClickingHandler(event);
	}
	if (event.target.closest('.input-search-icon')) {
		toFocusInput();
	}
};

export const foundCityClickingHandler = event => {
	const targetCityName = event.target.closest('.city-found').dataset.name;
	if (cityAlreadyAddedValidation(targetCityName)) return;

	const unsbuscribe = emitter.subscribe('receiveCurrentCity', data => {
		checkingSavedPageRendering(data);
		const savedCitiesWrapper = getSavedCitiesWrapper();
		rerenderSavedCities(savedCitiesWrapper, renderSavedCities());
		removeCitiesIfRendered();
		clearInputValue();
		unsbuscribe();
	});
	emitter.emit('getCurrentCity', { city: targetCityName });
	window.scrollTo(0, 0);
};

const rerenderSavedCities = (wrapper, cities) => {
	wrapper.innerHTML = '';
	wrapper.innerHTML = cities;
};

export const checkingSavedPageRendering = data => {
	if (window.location.hash.includes('#saved')) {
		const card = {
			city: data.location.name,
			country: data.location.country,
			temp_c: data.current.temp_c,
			temp_f: data.current.temp_f,
			icon: data.current.condition.icon,
			humidity: data.current.humidity,
			wind_kph: data.current.wind_kph,
			wind_mph: data.current.wind_mph,
		};
		cityHandler(card, saveCity);
	}
};

export const handleCityClick = data => {
	const storage = getLocalStorageData();
	const html = renderHandler(renderFoundCities, data);
	const div = createBlock('div', 'found-cities-wrapper');
	div.innerHTML = html;
	getSearchForm().append(div);

	const saved = [],
		received = [];
	storage.cards.forEach(card => {
		saved.push(card.city);
	});
	data.forEach(card => {
		received.push(card.name);
	});

	saved.forEach(str => {
		if (received.includes(str) && getCityFound().dataset.name === str) {
			getSearch().style.color = '#ed2bdac2';
		}
	});
};

export const cityAlreadyAddedValidation = city => {
	let isCityAdded = false;

	getLocalStorageData().cards.forEach(card => {
		if (card.city.includes(city)) {
			renderHandler(renderCustomNotification, 'This city already in the list!');
			isCityAdded = true;
		}
	});

	return isCityAdded;
};
