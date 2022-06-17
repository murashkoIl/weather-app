import { renderCustomNotification } from '../error/error';
import {
	renderFoundCities,
	deleteCity,
	removeCitiesIfRendered,
	renderSavedPage,
	cityHandler,
	saveCity,
	renderSavedCities
} from './savedRenders';

import { createBlock, getElementBySelector } from '../../../helpers/dom';
import { renderHandler } from '../../../helpers/render';
import { getLocalStorageData } from '../../../helpers/localstorage';
import { emitter } from '../../../helpers/emitter'

export const toFocusInput = () => {
	getElementBySelector('.input-search').focus();
};

export const constructSavedPage = () => {
	const wrapper = getElementBySelector('.wrapper');

	const savedHtmlObject = createBlock('div', 'saved-page');
	const unsbuscribe = emitter.subscribe('receiveCurrentCity', (data) => {
		savedHtmlObject.innerHTML = renderHandler(renderSavedPage, data);

		addOnInputListener();
		wrapper.addEventListener('click', handleWrapperListener);
		unsbuscribe();
	})
	emitter.emit('getCurrentCity', { city: 'auto:ip' })

	return savedHtmlObject;
};

export const savedPage = () => {
	const content = getElementBySelector('#content');
	content.innerHTML = '';
	content.appendChild(constructSavedPage());
	window.scrollTo(0, 0);
}

export const addOnInputListener = () => {
	if (getElementBySelector('.input-search')) {
		const inputSearch = getElementBySelector('.input-search');
		inputSearch.oninput = () => {
			searchHandler(inputSearch);
		};
	}
}

export const searchHandler = (input) => {
	removeCitiesIfRendered();

	if (input.value.length > 2) {
		const unsbuscribe = emitter.subscribe('receiveCities', (data) => {
			handleCityClick(data);
			unsbuscribe();
		})
		emitter.emit('getCities', { city: input.value })
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

	const unsbuscribe = emitter.subscribe('receiveCurrentCity', (data) => {

		checkingSavedPageRendering(data);
		const savedCitiesWrapper = getElementBySelector('.saved-cities-wrapper');
		rerenderSavedCities(savedCitiesWrapper, renderSavedCities());
		removeCitiesIfRendered();
		clearInputValue();
		unsbuscribe();
	})
	emitter.emit('getCurrentCity', { city: targetCityName });
	window.scrollTo(0, 0);
};

const rerenderSavedCities = (wrapper, cities) => {
	wrapper.innerHTML = '';
	wrapper.innerHTML = cities;
}

const clearInputValue = () => {
	getElementBySelector('.input-search').value = '';
}

export const checkingSavedPageRendering = (data) => {
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
}

export const handleCityClick = (data) => {
	const storage = getLocalStorageData();
	const html = renderHandler(renderFoundCities, data);
	const div = createBlock('div', 'found-cities-wrapper');
	div.innerHTML = html;
	getElementBySelector('.search-form').append(div);

	const saved = [],
		received = [];
	storage.cards.forEach(card => {
		saved.push(card.city);
	});
	data.forEach(card => {
		received.push(card.name);
	});

	saved.forEach(str => {
		if (
			received.includes(str) &&
			getElementBySelector('.city-found').dataset.name === str
		) {
			getElementBySelector('.search').style.color = '#ed2bdac2';
		}
	});
}

const cityAlreadyAddedValidation = (city) => {
	let isCityAdded = false;

	getLocalStorageData().cards.forEach(card => {
		if (card.city.includes(city)) {
			renderHandler(renderCustomNotification, 'This city already in the list!');
			isCityAdded = true;
		}
	});

	return isCityAdded;
}