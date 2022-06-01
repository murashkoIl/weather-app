import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { settingsObserver, themeObserver } from './../observer';

export const renderSettingsPage = (data) => {
	const storage = JSON.parse(window.localStorage.getItem('storage'));

	return `
    <header class="header">
    <div class="container">
        <div class="settings-page">
            <div class="your-location-wrapper">
                <div class="your-location-icon"><i class="fa-solid fa-location-crosshairs"></i></div>
                <div class="your-location-title">Your Location Now</div>
            </div>
            <div class="city-country">${data.location.name}, ${
		data.location.country
	}</div>
            <div class="city-icon"><img src="${
							data.current.condition.icon
						}" alt="Weather Icon"></div>
            <div class="city-status">${data.current.condition.text}</div>
            <div class="city-temperature">${
							storage.isCelcius ? data.current.temp_c : data.current.temp_f
						}º</div>
            <div class="city-settings">
                <div class="weather__info-humidity-wrapper">
                    <div class="weather__info-humidity-icon"><i class="fa-solid fa-droplet"></i></div>
                    <div class="weather__info-humidity">${
											data.current.humidity
										}%</div>
                </div>
                
                <div class="weather__info-pressure-wrapper">
                    <div class="weather__info-pressure-icon"> <i class="fa-solid fa-circle-exclamation"></i></div>
                    <div class="weather__info-pressure">${
											data.current.pressure_in
										}mBar</div>
                </div>
                <div class="weather__info-wind-wrapper">
                    <div class="weather__info-wind-icon"><i class="fa-solid fa-wind"></i></div>
                    <div class="weather__info-wind">${
											storage.isKPH
												? data.current.wind_kph + 'km/h'
												: data.current.wind_mph + 'm/s'
										}</div>
                </div>
            </div>

        </div>
    </div>
  </header>

  <section class="settings">
    <div class="container">
        <div class="settings-wrapper">
            <div class="settings-item">
                <div class="settings-item-title">Temperature</div>
                <div class="settings-item-choice choice-temperature">${
									storage.isCelcius ? 'ºC' : 'ºF'
								}</div>
            </div>
            <div class="settings-item">
                <div class="settings-item-title">Wind Speed</div>
                <div class="settings-item-choice choice-wind">${
									storage.isKPH ? 'km/h' : 'm/s'
								}</div>
            </div>
            <div class="settings-item">
                <div class="settings-item-title">Theme</div>
                <div class="settings-item-choice choice-theme">${
									storage.isDarkTheme ? 'Dark' : 'Light'
								}</div>
            </div>
        </div>
    </div>
  </section>
  `;
};

export const constructSettingsPage = () => {
	getCurrentWeather(BASE_URL)
		.then((data) => {
			const html = renderSettingsPage(data);
			document.getElementById('content').innerHTML = html;
		})
		.then(() => {
			const settings = document.querySelector('.settings-wrapper');
			settings.addEventListener('click', settingsHandler);
		})
		.catch((err) => renderCustomNotification(err));
};

const settingsHandler = (event) => {
	const evnt = event.target;
	const storage = JSON.parse(localStorage.getItem('storage'));
	if (evnt.classList.contains('choice-temperature')) {
		if (evnt.textContent === 'ºC') {
			evnt.textContent = 'ºF';
			storage.isCelcius = false;
			localStorage.setItem('storage', JSON.stringify(storage));
		} else {
			evnt.textContent = 'ºC';
			storage.isCelcius = true;
			localStorage.setItem('storage', JSON.stringify(storage));
		}
	} else if (evnt.classList.contains('choice-wind')) {
		if (evnt.textContent === 'km/h') {
			evnt.textContent = 'm/s';
			storage.isKPH = false;
			localStorage.setItem('storage', JSON.stringify(storage));
		} else {
			evnt.textContent = 'km/h';
			storage.isKPH = true;
			localStorage.setItem('storage', JSON.stringify(storage));
		}
	} else if (evnt.classList.contains('choice-theme')) {
		if (evnt.textContent === 'Dark') {
			evnt.textContent = 'Light';
			storage.isDarkTheme = false;
			localStorage.setItem('storage', JSON.stringify(storage));
		} else {
			evnt.textContent = 'Dark';
			storage.isDarkTheme = true;
			localStorage.setItem('storage', JSON.stringify(storage));
		}
	}
	settingsObserver.trigger();
	themeObserver.trigger();
};
