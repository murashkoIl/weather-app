import { locationHandler, isCitiesRendered, routes, cityPage } from './router';
import * as weather from './weather';

const link = document.querySelector('.footer-container');

const toggleActiveClass = (event) => {
	const activeLink = document.querySelector('.active');
	activeLink.classList.remove('active');
	event.target.classList.add('active');
};

link.addEventListener('click', toggleActiveClass);

export const handleWrapperListener = (event) => {
	if (
		event.target.closest('.city') &&
		!event.target.classList.contains('city-delete')
	) {
		let newLocation = (
			document.location.hash + `/${event.target.closest('.city').dataset.id}`
		).replace(' ', '');
		routes[newLocation] = cityPage;
		document.location.assign(
			(
				document.location.hash + `/${event.target.closest('.city').dataset.id}`
			).replace(' ', '')
		);
	}
	if (!event.target.classList.contains('found-cities-wrapper')) {
		isCitiesRendered();
	}
	if (event.target.classList.contains('city-delete')) {
		console.log('delete event', event.target.dataset.id);
		const storage = JSON.parse(window.localStorage.getItem('storage'));
		const filtered = storage.cards.filter(
			(card) => card.city !== event.target.dataset.id
		);
		storage.cards = [...filtered];
		window.localStorage.setItem('storage', JSON.stringify(storage));
		locationHandler();
	}
	if (event.target.classList.contains('search')) {
		weather
			.getCurrentWeather(weather.BASE_URL, event.target.dataset.name)
			.then((data) => {
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
				weather.saveCity(card);
			})
			.then(() => {
				locationHandler();
			});
	}
	if (event.target.closest('.input-search-icon')) {
		toFocusInput();
	}
};

const toFocusInput = () => {
	document.querySelector('.input-search').focus();
};
