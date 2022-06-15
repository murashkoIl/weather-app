import { fetchTemperature, fetchWindSpeed } from '../js/pages/settings/settings';

export const settingsPageTemplate = (storage, data) => {
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
            <div class="city-temperature-wrapper">${fetchTemperature()}</div>
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
                    <div class="weather__info-wind-wrapper">${fetchWindSpeed()}</div>
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
}