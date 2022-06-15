import { renderCustomNotification } from '../error/error';
import {
	renderFoundCities,
	deleteCity,
	isCitiesRendered,
	renderSavedPage,
	cityHandler,
	saveCity
} from './savedRenders';

import {
	createBlock,
	getElementBySelector,
} from '../../../helpers/dom';
import { renderHandler } from '../../../helpers/render';
import { getLocalStorageData } from '../../../helpers/localstorage';
import { emitter } from '../../../helpers/emitter';
import { renderLoader } from '../loader';

export const toFocusInput = () => {
	getElementBySelector('.input-search').focus();
};

export const constructSavedPage = () => {
	const wrapper = getElementBySelector('.wrapper');

	const htmlObject = createBlock('div', 'saved-page');
	htmlObject.innerHTML = renderHandler(renderSavedPage);
	window.scrollTo(0, 0);

	wrapper.addEventListener('click', handleWrapperListener);

	return htmlObject;
};

export const savedPage = () => {
	getElementBySelector('#content').innerHTML = '';
	getElementBySelector('#content').appendChild(constructSavedPage());
	addOnInputListener();
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
	isCitiesRendered();

	if (input.value.length > 2) {
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
		isCitiesRendered();
	}
	if (event.target.classList.contains('city-delete')) {
		cityHandler(event.target.dataset.id, deleteCity);
		savedPage();
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
	let isCitiesEquals = false;

	getLocalStorageData().cards.forEach(card => {
		if (card.city.includes(targetCityName)) {
			renderHandler(renderCustomNotification, 'This city already in the list!');
			isCitiesEquals = true;
		}
	});

	if (isCitiesEquals) return;

	const htmlObject = createBlock('div', 'loader-wrapper');
	htmlObject.innerHTML = renderHandler(renderLoader);

	emitter.emit('getCurrentCity', { city: targetCityName, method: renderSavedPage});
	window.scrollTo(0, 0);

	return htmlObject;
};

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

export const processCityClick = (data) => {
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