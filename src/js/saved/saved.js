import { getCurrentWeather, BASE_URL, getCities } from './../weather';
import { renderCustomNotification } from '../error/error';
import {
	renderFoundCities,
	deleteCity,
	saveCity,
	isCitiesRendered,
	renderSavedPage
} from './savedHelpers';

export const toFocusInput = () => {
	document.querySelector('.input-search').focus();
};

export const constructSavedPage = () => {
	const wrapper = document.querySelector('.wrapper');
	const html = renderSavedPage();
	const storage = JSON.parse(localStorage.getItem('storage'));
	document.getElementById('content').innerHTML = html;
	window.scrollTo(0, 0);

	wrapper.addEventListener('click', handleWrapperListener);
	const inputSearch = document.querySelector('.input-search');

	inputSearch.oninput = function () {
		isCitiesRendered();
		if (this.value.length > 2) {
			getCities(BASE_URL, this.value)
				.then(data => {
					const html = renderFoundCities(data);
					const div = document.createElement('div');
					div.className = 'found-cities-wrapper';
					div.innerHTML = html;
					document.querySelector('.search-form').append(div);

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
							document.querySelector('.city-found').dataset.name === str
						) {
							document.querySelector('.search').style.color = '#ed2bdac2';
						}
					});
				})
				.catch(err => renderCustomNotification(err));
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
		deleteCity(event.target.dataset.id);
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

	JSON.parse(localStorage.getItem('storage')).cards.forEach(card => {
		if (card.city.includes(targetCityName)) {
			renderCustomNotification('This city already in the list!');
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
			saveCity(card);
		})
		.then(() => {
			constructSavedPage();
		})
		.catch(err => renderCustomNotification(err));
};

