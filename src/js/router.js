// export const homePage = () => {
// 	getCurrentWeather(BASE_URL)
// 		.then((data) => {
// 			const html = renderHomePage(data);
// 			document.getElementById('content').innerHTML = html;
// 			window.scrollTo(0, 0);
// 		})
// 		.catch((err) => {
// 			renderCustomNotification(err);
// 		});
// };

// export const savedPage = () => {
// 	for (let key in routes) {
// 		if (key.includes('#saved/')) {
// 			delete routes[key];
// 		}
// 	}

// 	const wrapper = document.querySelector('.wrapper');
// 	const html = renderSavedPage();
// 	const storage = JSON.parse(localStorage.getItem('storage'));
// 	document.getElementById('content').innerHTML = html;
// 	window.scrollTo(0, 0);

// 	wrapper.addEventListener('click', handleWrapperListener);
// 	const inputSearch = document.querySelector('.input-search');

// 	inputSearch.oninput = function () {
// 		isCitiesRendered();
// 		if (this.value.length > 2) {
// 			getCities(BASE_URL, this.value)
// 				.then((data) => {
// 					console.log(data);
// 					const html = renderFoundCities(data);
// 					const div = document.createElement('div');
// 					div.className = 'found-cities-wrapper';
// 					div.innerHTML = html;
// 					document.querySelector('.search-form').append(div);

// 					const saved = [],
// 						received = [];
// 					storage.cards.forEach((card) => {
// 						saved.push(card.city);
// 					});
// 					data.forEach((card) => {
// 						received.push(card.name);
// 					});

// 					return { saved, received };

// 					// must be better solution
// 				})
// 				.then((arrays) => {
// 					arrays.saved.forEach((str) => {
// 						if (
// 							arrays.received.includes(str) &&
// 							document.querySelector('.city-found').dataset.name === str
// 						) {
// 							// console.log(document.querySelector('.city-found').setAttribute('disabled', ''));
// 							// document.querySelector('.search').style.display = 'none';
// 							document.querySelector('.city-found').style.backgroundColor =
// 								'red';
// 							// console.log(document.querySelector('.search').dataset.name);
// 							// document.querySelector('.search').remove();
// 						}
// 					});
// 				})
// 				.catch((err) => renderCustomNotification(err));
// 		}
// 	};
// };

// export const settingsPage = () => {
// 	getCurrentWeather(BASE_URL)
// 		.then((data) => {
// 			const html = renderSettingsPage(data);
// 			document.getElementById('content').innerHTML = html;
// 		})
// 		.then(() => {
// 			const settings = document.querySelector('.settings-wrapper');
// 			settings.addEventListener('click', settingsHandler);
// 		})
// 		.catch((err) => renderCustomNotification(err));
// };

// export const errorPage = () => {
// 	const html = renderErrorPage();
// 	document.getElementById('content').innerHTML = html;
// };

// export const cityPage = () => {
// 	getCurrentWeather(BASE_URL, location.hash.split('/')[1])
// 		.then((data) => {
// 			const html = renderHomePage(data);
// 			document.getElementById('content').innerHTML = html;
// 			const goBack = document.querySelector('.header-return');
// 			goBack.style.display = 'block';
// 			goBack.addEventListener('click', () => {
// 				window.location.hash = '#saved';
// 				locationHandler();
// 			});
// 			window.scrollTo(0, 0);
// 		})
// 		.catch((err) => renderCustomNotification(err));
// };

// export const routes = {
// 	'#home': homePage,
// 	'#saved': savedPage,
// 	'#settings': settingsPage,
// 	404: errorPage,
// };

// export const locationHandler = () => {
// 	const storage = JSON.parse(localStorage.getItem('storage'));
// 	!storage.isDarkTheme
// 		? document.body.classList.add('light')
// 		: document.body.classList.remove('light');

// 	if (!routes[location.hash]) {
// 		routes[404]();
// 	} else {
// 		routes[location.hash]();
// 	}
// };

// const settingsHandler = (event) => {
// 	const evnt = event.target;
// 	const storage = JSON.parse(localStorage.getItem('storage'));
// 	if (evnt.classList.contains('choice-temperature')) {
// 		if (evnt.textContent === 'ºC') {
// 			evnt.textContent = 'ºF';
// 			storage.isCelcius = false;
// 			localStorage.setItem('storage', JSON.stringify(storage));
// 			locationHandler();
// 		} else {
// 			evnt.textContent = 'ºC';
// 			storage.isCelcius = true;
// 			localStorage.setItem('storage', JSON.stringify(storage));
// 			locationHandler();
// 		}
// 	} else if (evnt.classList.contains('choice-wind')) {
// 		if (evnt.textContent === 'km/h') {
// 			evnt.textContent = 'm/s';
// 			storage.isKPH = false;
// 			localStorage.setItem('storage', JSON.stringify(storage));
// 			locationHandler();
// 		} else {
// 			evnt.textContent = 'km/h';
// 			storage.isKPH = true;
// 			localStorage.setItem('storage', JSON.stringify(storage));
// 			locationHandler();
// 		}
// 	} else if (evnt.classList.contains('choice-theme')) {
// 		if (evnt.textContent === 'Dark') {
// 			evnt.textContent = 'Light';
// 			storage.isDarkTheme = false;
// 			localStorage.setItem('storage', JSON.stringify(storage));
// 			locationHandler();
// 		} else {
// 			evnt.textContent = 'Dark';
// 			storage.isDarkTheme = true;
// 			localStorage.setItem('storage', JSON.stringify(storage));
// 			locationHandler();
// 		}
// 	}
// };

// export const isCitiesRendered = () => {
// 	const citiesWrapper = document.querySelector('.found-cities-wrapper');
// 	if (citiesWrapper) {
// 		citiesWrapper.remove();
// 	}
// };

// window.onload = () => {
// 	window.location.hash = '#home';
// 	locationHandler();
// };

// window.addEventListener('hashchange', locationHandler);

//=================//=================//=================//=================

import { themeObserver } from './observer';

export const startRouterWatch = (routes) => {
	window.onload = () => {
		themeObserver.trigger();
		window.location.hash = '#home';
		locationChangeHandler(routes);
	};

	window.addEventListener('hashchange', (e) => {
		e.preventDefault();

		const storage = JSON.parse(localStorage.getItem('storage'));
		for (let i = 0; i < storage.cards.length; i++) {
			const card = storage.cards[i];
			if (
				location.hash
					.replaceAll('%20', '')
					.includes(card.city.replaceAll(' ', ''))
			) {
				return;
			}
		}
		locationChangeHandler(routes);
	});
};

export const locationChangeHandler = (routes) => {
	const hash = window.location.hash;

	if (!routes[hash]) {
		routes[404]();
	} else {
		routes[hash]();
	}
};
