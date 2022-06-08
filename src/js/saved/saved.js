import { getCurrentWeather, BASE_URL, getCities } from './../weather';
import { renderCustomNotification } from '../error/error';
import {
	renderFoundCities,
	deleteCity,
	saveCity,
	isCitiesRendered,
	renderSavedPage,
	cityHandler,
} from './savedRenders';
import {
	addHtmlToDom,
	createBlock,
	getElementBySelector,
	getLocalStorageData,
	renderHandler,
} from '../helpers';

export const toFocusInput = () => {
	getElementBySelector('.input-search').focus();
};

export const constructSavedPage = () => {
	const wrapper = getElementBySelector('.wrapper');
	addHtmlToDom(renderHandler(renderSavedPage));
	window.scrollTo(0, 0);
	wrapper.addEventListener('click', handleWrapperListener);
	const inputSearch = getElementBySelector('.input-search');
	const storage = getLocalStorageData();

	inputSearch.oninput = function () {
		isCitiesRendered();
		if (this.value.length > 2) {
			getCities(BASE_URL, this.value)
				.then(data => {
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

					return { saved, received };
				})
				.then(arrays => {
					arrays.saved.forEach(str => {
						if (
							arrays.received.includes(str) &&
							getElementBySelector('.city-found').dataset.name === str
						) {
							getElementBySelector('.search').style.color = '#ed2bdac2';
						}
					});
				})
				.catch(err => renderHandler(renderCustomNotification, err));
		}
	};
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
		constructSavedPage();
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

	getCurrentWeather(BASE_URL, event.target.closest('.city-found').dataset.name)
		.then(data => {
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
		})
		.then(() => {
			constructSavedPage();
		})
		.catch(err => renderHandler(renderCustomNotification, err));
};
