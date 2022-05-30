import { locationHandler, isCitiesRendered, routes, cityPage } from './router';
import { saveCity, deleteCity, toFocusInput } from './saved/saved';
import { renderCustomNotification } from './error/error';
import { BASE_URL, getCurrentWeather } from './weather';

if (localStorage.getItem('storage') === null) {
	localStorage.setItem(
		'storage',
		JSON.stringify({
			isDarkTheme: true,
			isCelcius: true,
			isKPH: true,
			editMode: false,
			cards: [],
		})
	);
}

const link = document.querySelector('.footer-container');

const toggleActiveClass = (event) => {
	if (event.target.closest('.footer-item')) {
		const activeLink = document.querySelector('.active');
		activeLink.classList.remove('active');
		event.target.classList.add('active');
	}
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
		deleteCity(event.target.dataset.id);
		locationHandler();
	}
	if (event.target.classList.contains('search')) {
		getCurrentWeather(BASE_URL, event.target.dataset.name)
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
				saveCity(card);
			})
			.then(() => {
				locationHandler();
			})
			.catch((err) => renderCustomNotification(err));
	}
	if (event.target.closest('.input-search-icon')) {
		toFocusInput();
	}
};
