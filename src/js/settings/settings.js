import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { settingsObserver, themeObserver } from './../observer';
import { addHtmlToDom, getLocalStorageData, renderHandler, saveLocalStorageData } from '../helpers';

export const renderSettingsPage = data => {
	const storage = getLocalStorageData();

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
		.then(data => {
			addHtmlToDom(renderHandler(renderSettingsPage, data));
		})
		.then(() => {
			const settings = document.querySelector('.settings-wrapper');
			settings.addEventListener('click', settingsHandler);
		})
		.catch(err => renderHandler(renderCustomNotification, err));
};

const settingsHandler = event => {
	const e = event.target;
	const storage = getLocalStorageData();
	if (e.classList.contains('choice-temperature')) {
		if (e.textContent === 'ºC') {
			e.textContent = 'ºF';
			storage.isCelcius = false;
		} else {
			e.textContent = 'ºC';
			storage.isCelcius = true;
		}
	} else if (e.classList.contains('choice-wind')) {
		if (e.textContent === 'km/h') {
			e.textContent = 'm/s';
			storage.isKPH = false;
		} else {
			e.textContent = 'km/h';
			storage.isKPH = true;
		}
	} else if (e.classList.contains('choice-theme')) {
		if (e.textContent === 'Dark') {
			e.textContent = 'Light';
			storage.isDarkTheme = false;
		} else {
			e.textContent = 'Dark';
			storage.isDarkTheme = true;
		}
	}
	saveLocalStorageData(storage);
	settingsObserver.trigger();
	themeObserver.trigger();
};
