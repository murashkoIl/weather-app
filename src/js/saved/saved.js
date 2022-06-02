import { getCurrentWeather, BASE_URL, getCities } from './../weather';
import { renderCustomNotification } from '../error/error';
import { renderHomePage } from './../home/home';

export const renderSavedPage = () => {
	return `
    <header class="header">
      <div class="container">
          <form class="search-form" type="submit" action="#">
              <div class="input-wrapper">
                  <a class="input-search-icon"><i class="fa-solid fa-magnifying-glass"></i></a>
                  <input class="input-search" type="text" placeholder="Search">
                  
              </div>
          </form>
      </div>
    </header>
    <section class="saved-cities">
      <div class="container">
          <div class="saved-cities-wrapper">
            ${renderSavedCities()}
          </div>
      </div>
    </section>
  `;
};

export const renderSavedCities = () => {
	const storage = updateCurrentWeather();
	return `
    ${storage.cards
			.map((card) => {
				return `
                <div data-id="${card.city}" class="saved-cities-item city">
                  <div data-id="${card.city}" class="city-delete">x</div>
                  <div class="city-deg-icon">
                      <div class="city-deg">${
												storage.isCelcius ? card.temp_c : card.temp_f
											}º</div>
                      <div class="city-icon"><img src="${card.icon}"></div>
                  </div>
                  <div class="city-name">${card.city}</div>
                  <div class="country-name">${card.country}</div>
                  <div class="city-weather-info">
                      
                      <div class="city-weather-humidity-wrapper">
                          <div class="city-weather-humidity-icon"><i class="fa-solid fa-droplet"></i></div>
                          <div class="city-weather-humidity">${
														card.humidity
													}%</div>
                      </div>
                      <div class="city-weather-wind-wrapper">
                          <div class="city-weather-wind-icon"><i class="fa-solid fa-wind"></i></div>
                          <div class="city-weather-wind">${
														storage.isKPH
															? card.wind_kph + 'km/h'
															: card.wind_mph + 'm/s'
													}</div>
                      </div>
                      
                  </div>
                </div>
              `;
			})
			.join('')}
  `;
};

export const updateCurrentWeather = () => {
	const storage = JSON.parse(window.localStorage.getItem('storage'));
	storage.cards.forEach((card, index) => {
		getCurrentWeather(BASE_URL, card.city)
			.then((info) => {
				const updatedCard = {
					city: info.location.name,
					country: info.location.country,
					temp_c: info.current.temp_c,
					temp_f: info.current.temp_f,
					icon: info.current.condition.icon,
					humidity: info.current.humidity,
					wind_kph: info.current.wind_kph,
					wind_mph: info.current.wind_mph,
				};
				storage.cards[index] = updatedCard;
				window.localStorage.setItem('storage', JSON.stringify(storage));
			})
			.catch((err) => renderCustomNotification(err));
	});
	return storage;
};

export const renderFoundCities = (data) => {
	return `
  <div class="found-cities">
    ${data
			.map((city) => {
				return `
        <div data-name="${city.name}" class="found-cities-item city-found">
          <div class="city-found-name">${city.name}</div>
          <div class="city-found-icon"><i class="fa-solid fa-heart search"></i></div>
        </div>
      `;
			})
			.join('')}
  </div>
  `;
};

export const saveCity = (card) => {
	const storage = JSON.parse(window.localStorage.getItem('storage'));
	storage.cards.push(card);
	window.localStorage.setItem('storage', JSON.stringify(storage));
};

export const deleteCity = (city) => {
	const storage = JSON.parse(localStorage.getItem('storage'));
	const filtered = storage.cards.filter((card) => card.city !== city);
	storage.cards = [...filtered];
	localStorage.setItem('storage', JSON.stringify(storage));
};

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
				.then((data) => {
					const html = renderFoundCities(data);
					const div = document.createElement('div');
					div.className = 'found-cities-wrapper';
					div.innerHTML = html;
					document.querySelector('.search-form').append(div);

					const saved = [],
						received = [];
					storage.cards.forEach((card) => {
						saved.push(card.city);
					});
					data.forEach((card) => {
						received.push(card.name);
					});

					return { saved, received };
				})
				.then((arrays) => {
					arrays.saved.forEach((str) => {
						if (
							arrays.received.includes(str) &&
							document.querySelector('.city-found').dataset.name === str
						) {
							document.querySelector('.search').style.color = '#ed2bdac2';
						}
					});
				})
				.catch((err) => renderCustomNotification(err));
		}
	};
};

export const isCitiesRendered = () => {
	const citiesWrapper = document.querySelector('.found-cities-wrapper');
	if (citiesWrapper) {
		citiesWrapper.remove();
	}
};

export const handleWrapperListener = (event) => {
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
		const targetCityName = event.target.closest('.city-found').dataset.name;
		let isCitiesEquals = false;

		JSON.parse(localStorage.getItem('storage')).cards.forEach((card) => {
			if (card.city.includes(targetCityName)) {
				renderCustomNotification('This city already in the list!');
				isCitiesEquals = true;
			}
		});

		if (isCitiesEquals) return;

		getCurrentWeather(
			BASE_URL,
			event.target.closest('.city-found').dataset.name
		)
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
				constructSavedPage();
			})
			.catch((err) => renderCustomNotification(err));
	}
	if (event.target.closest('.input-search-icon')) {
		toFocusInput();
	}
};
