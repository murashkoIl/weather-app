import * as weather from './weather';
import { handleWrapperListener } from './main';
import './main';

if (localStorage.getItem('storage') === null) {
	localStorage.setItem(
		'storage',
		JSON.stringify({
			isDarkTheme: true,
			isCelcius: true,
			isKPH: true,
			editMode: false,
			cards: [
				{
					city: 'Austin',
					country: 'USA',
					temp_c: 23,
					temp_f: 40,
					icon: 'http://cdn.weatherapi.com/weather/64x64/night/122.png',
					humidity: 20,
					wind_kph: 10,
					wind_mph: 5,
				},
				{
					city: 'Brest',
					country: 'Belarus',
					temp_c: 20,
					temp_f: 38,
					icon: 'http://cdn.weatherapi.com/weather/64x64/night/122.png',
					humidity: 20,
					wind_kph: 10,
					wind_mph: 5,
				},
			],
		})
	);
}

const homePage = () => {
	weather
		.getCurrentWeather(weather.BASE_URL)
		.then((data) => {
			const html = weather.renderHomePage(data);
			document.getElementById('content').innerHTML = html;
			window.scrollTo(0, 0);
		})
		.catch((err) => alert(err));
};

const savedPage = () => {
	for (let key in routes) {
		if (key.includes('#saved/')) {
			delete routes[key];
		}
	}

	const wrapper = document.querySelector('.wrapper');
	const html = weather.renderSavedPage();
	const storage = JSON.parse(localStorage.getItem('storage'));
	document.getElementById('content').innerHTML = html;
	window.scrollTo(0, 0);

	wrapper.addEventListener('click', handleWrapperListener);
	const inputSearch = document.querySelector('.input-search');

	inputSearch.oninput = function () {
		isCitiesRendered();
		if (this.value.length > 2) {
			weather
				.getCities(weather.BASE_URL, this.value)
				.then((data) => {
					const html = weather.renderFoundCities(data);
					let div = document.createElement('div');
					div.className = 'found-cities-wrapper';
					div.innerHTML = html;
					document.querySelector('.search-form').append(div);

					// must be better solution
					const saved = [],
						received = [];
					storage.cards.forEach((card) => {
						saved.push(card.city);
					});
					data.forEach((card) => {
						received.push(card.name);
					});

					saved.forEach((str) => {
						if (received.includes(str)) {
							document.querySelector('.search').style.display = 'none';
						}
					});
				})
				.catch((err) => alert(err));
		}
	};
};

const settingsPage = () => {
	weather
		.getCurrentWeather(weather.BASE_URL)
		.then((data) => {
			const html = weather.renderSettingsPage(data);
			document.getElementById('content').innerHTML = html;
		})
		.then(() => {
			const settings = document.querySelector('.settings-wrapper');
			settings.addEventListener('click', settingsHandler);
		})
		.catch((err) => alert(err));
};

const errorPage = () => {
	const html = weather.renderErrorPage();
	document.getElementById('content').innerHTML = html;
};

export const cityPage = () => {
	weather
		.getCurrentWeather(weather.BASE_URL, location.hash.split('/')[1])
		.then((data) => {
			const html = weather.renderHomePage(data);
			document.getElementById('content').innerHTML = html;
			const goBack = document.querySelector('.header-return');
			goBack.style.display = 'block';
			goBack.addEventListener('click', () => {
				window.location.hash = '#saved';
				locationHandler();
			});
			window.scrollTo(0, 0);
		})
		.catch((err) => alert(err));
};

export const routes = {
	'#home': homePage,
	'#saved': savedPage,
	'#settings': settingsPage,
	404: errorPage,
};

export const locationHandler = () => {
	const storage = JSON.parse(localStorage.getItem('storage'));
	!storage.isDarkTheme
		? document.body.classList.add('light')
		: document.body.classList.remove('light');

	if (!routes[location.hash]) {
		routes[404]();
	} else {
		routes[location.hash]();
	}
};

const settingsHandler = (event) => {
	const evnt = event.target;
	const storage = JSON.parse(localStorage.getItem('storage'));
	if (evnt.classList.contains('choice-temperature')) {
		if (evnt.textContent === 'ºC') {
			evnt.textContent = 'ºF';
			storage.isCelcius = false;
			localStorage.setItem('storage', JSON.stringify(storage));
			locationHandler();
		} else {
			evnt.textContent = 'ºC';
			storage.isCelcius = true;
			localStorage.setItem('storage', JSON.stringify(storage));
			locationHandler();
		}
	} else if (evnt.classList.contains('choice-wind')) {
		if (evnt.textContent === 'km/h') {
			evnt.textContent = 'm/s';
			storage.isKPH = false;
			localStorage.setItem('storage', JSON.stringify(storage));
			locationHandler();
		} else {
			evnt.textContent = 'km/h';
			storage.isKPH = true;
			localStorage.setItem('storage', JSON.stringify(storage));
			locationHandler();
		}
	} else if (evnt.classList.contains('choice-theme')) {
		if (evnt.textContent === 'Dark') {
			evnt.textContent = 'Light';
			storage.isDarkTheme = false;
			localStorage.setItem('storage', JSON.stringify(storage));
			locationHandler();
		} else {
			evnt.textContent = 'Dark';
			storage.isDarkTheme = true;
			localStorage.setItem('storage', JSON.stringify(storage));
			locationHandler();
		}
	}
};

export const isCitiesRendered = () => {
	const citiesWrapper = document.querySelector('.found-cities-wrapper');
	if (citiesWrapper) {
		citiesWrapper.remove();
	}
};

window.onload = () => {
	window.location.hash = '#home';
	locationHandler();
};

window.addEventListener('hashchange', locationHandler);
