export const BASE_URL = 'https://api.weatherapi.com/v1';
const API_KEY = 'c1b5dcebecd24bc99f5141741221705';

export const getCurrentWeather = async (url, city = 'auto:ip') => {
  const currentWeatherUrl =
    url + `/forecast.json?key=${API_KEY}&q=${city}&days=4&aqi=no&alerts=no`;

  const response = await fetch(currentWeatherUrl, {
    method: 'GET',
  });

  if (!response.ok) {
    throw new Error(`Smth went wrong!`);
  }
  return await response.json();
};

export const getCities = async (url, text) => {
  if (text.length < 2) {
    return;
  }
  const citiesWeatherUrl =
    url + `/search.json?key=c1b5dcebecd24bc99f5141741221705&q=${text}`;

  const response = await fetch(citiesWeatherUrl, {
    method: 'GET',
  });

  if (!response.ok) {
    alert(response.status);
    throw new Error(`Error! status: ${response.status}`);
  }

  const data = await response.json();
  return data.splice(0, 3);
};

export const renderHomePage = (data) => {
  const dayIndex = new Date(data.forecast.forecastday[0].date).getDay();
  const getDayName = (dayIndex) => {
    const days = [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ];
    return [...days, ...days][dayIndex];
  };

  const storage = JSON.parse(window.localStorage.getItem('storage'));

  return `
    <header>
    <div class="container">
        <div class="header-wrapper">
            <div class="header-info">
                <div class="header-info-wrapper">
                  <div class="header-return"><i class="fa-solid fa-arrow-left-long"></i></div>
                  <div class="header-city">${data.location.name}</div>
                </div>
                <div class="header-temparature">${storage.isCelcius ? data.current.temp_c : data.current.temp_f
    }º</div>
                <div class="header-status">${data.current.condition.text}</div>
            </div>
            <div class="header-icon"><img src="${data.current.condition.icon
    }" alt="Weather Icon"></div>
        </div>
        <div class="weather__info-container">

            <div class="weather__info-humidity-wrapper">
                <div class="weather__info-humidity-icon"><i class="fa-solid fa-droplet"></i></div>
                <div class="weather__info-humidity">${data.current.humidity
    }%</div>
            </div>

            
            <div class="weather__info-pressure-wrapper">
                <div class="weather__info-pressure-icon"> <i class="fa-solid fa-circle-exclamation"></i></div>
                <div class="weather__info-pressure">${data.current.pressure_in
    }mBar</div>
            </div>
            <div class="weather__info-wind-wrapper">
                <div class="weather__info-wind-icon"><i class="fa-solid fa-wind"></i></div>
                <div class="weather__info-wind">${storage.isKPH
      ? data.current.wind_kph + 'km/h'
      : data.current.wind_mph + 'm/s'
    }</div>
            </div>
            

        </div>
    </div>
  </header>
  <section class="sunset-sunrise">
    <div class="container">
        <div class="sunset-wrapper">
            <div class="sunset-icon"><i class="fa-solid fa-moon"></i></div>
            <div class="sunset">${data.forecast.forecastday[0].astro.sunset
    }</div>
        </div>
        <div class="sunset-sunrise-divider"></div>
        <div class="sunrise-wrapper">
            <div class="sunrise-icon"><i class="fa-solid fa-sun"></i></div>
            <div class="sunrise">${data.forecast.forecastday[1].astro.sunrise
    }</div>
        </div>
    </div>
  </section>
  <section class="today__temp">
    <div class="container">
        <div class="today__temp-container">
            <div class="today__temp-flex-container">
                ${data.forecast.forecastday[0].hour
      .map((hour) => {
        return `
                    <div class="today__temp-item today-item">
                      <div class="today-item__time">${hour.time.substr(
          10,
          hour.time.length
        )}</div>
                      <div class="today-item__icon"><img src="${hour.condition.icon
          }" alt="Wether Icon"></div>
                      <div class="today-item__degree">${storage.isCelcius ? hour.temp_c : hour.temp_f
          }º</div>
                    </div>
                  `;
      })
      .join('')}
        </div>
    </div>
  </section>
  <section class="week__temp">
    <div class="container">
        <div class="week__temp-container">
            <div class="week__temp-item week-item">
                <div class="week-item__day item">${getDayName(
        dayIndex + 1
      )}</div>
                <div class="week-item__day item">${getDayName(
        dayIndex + 2
      )}</div>
            </div>

            <div class="week__temp-item week-item">
                <div class="week-item__icon item"><img src="${data.forecast.forecastday[1].day.condition.icon
    }" alt="Weather Icon"></div>
                <div class="week-item__icon item"><img src="${data.forecast.forecastday[2].day.condition.icon
    }" alt="Weather Icon"></div>
            </div>

            <div class="week__temp-item week-item">
                <div class="week-item__daytemp item">${storage.isCelcius
      ? data.forecast.forecastday[1].day.maxtemp_c
      : data.forecast.forecastday[1].day.maxtemp_f
    }º</div>
                <div class="week-item__daytemp item">${storage.isCelcius
      ? data.forecast.forecastday[2].day.maxtemp_c
      : data.forecast.forecastday[2].day.maxtemp_f
    }º</div>
            </div>

            <div class="week__temp-item week-item">
                <div class="week-item__nighttemp item">${storage.isCelcius
      ? data.forecast.forecastday[1].day.mintemp_c
      : data.forecast.forecastday[2].day.mintemp_f
    }º</div>
                <div class="week-item__nighttemp item">${storage.isCelcius
      ? data.forecast.forecastday[2].day.mintemp_c
      : data.forecast.forecastday[2].day.mintemp_f
    }º</div>
            </div>
        </div>
    </div>
  </section>

  `;
};

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
            <div class="city-country">${data.location.name}, ${data.location.country
    }</div>
            <div class="city-icon"><img src="${data.current.condition.icon
    }" alt="Weather Icon"></div>
            <div class="city-status">${data.current.condition.text}</div>
            <div class="city-temperature">${storage.isCelcius ? data.current.temp_c : data.current.temp_f
    }º</div>
            <div class="city-settings">
                <div class="weather__info-humidity-wrapper">
                    <div class="weather__info-humidity-icon"><i class="fa-solid fa-droplet"></i></div>
                    <div class="weather__info-humidity">${data.current.humidity
    }%</div>
                </div>
                
                <div class="weather__info-pressure-wrapper">
                    <div class="weather__info-pressure-icon"> <i class="fa-solid fa-circle-exclamation"></i></div>
                    <div class="weather__info-pressure">${data.current.pressure_in
    }mBar</div>
                </div>
                <div class="weather__info-wind-wrapper">
                    <div class="weather__info-wind-icon"><i class="fa-solid fa-wind"></i></div>
                    <div class="weather__info-wind">${storage.isKPH
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
                <div class="settings-item-choice choice-temperature">${storage.isCelcius ? 'ºC' : 'ºF'
    }</div>
            </div>
            <div class="settings-item">
                <div class="settings-item-title">Wind Speed</div>
                <div class="settings-item-choice choice-wind">${storage.isKPH ? 'km/h' : 'm/s'
    }</div>
            </div>
            <div class="settings-item">
                <div class="settings-item-title">Theme</div>
                <div class="settings-item-choice choice-theme">${storage.isDarkTheme ? 'Dark' : 'Light'
    }</div>
            </div>
        </div>
    </div>
  </section>
  `;
};

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

export const renderErrorPage = () => {
  return `
    <div class="error-container">
      <h1 class="error-404">404</h1>
      <div class="error-message">Something Went Wrong...</div>
    </div>
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
                      <div class="city-deg">${storage.isCelcius ? card.temp_c : card.temp_f
          }º</div>
                      <div class="city-icon"><img src="${card.icon}"></div>
                  </div>
                  <div class="city-name">${card.city}</div>
                  <div class="country-name">${card.country}</div>
                  <div class="city-weather-info">
                      
                      <div class="city-weather-humidity-wrapper">
                          <div class="city-weather-humidity-icon"><i class="fa-solid fa-droplet"></i></div>
                          <div class="city-weather-humidity">${card.humidity
          }%</div>
                      </div>
                      <div class="city-weather-wind-wrapper">
                          <div class="city-weather-wind-icon"><i class="fa-solid fa-wind"></i></div>
                          <div class="city-weather-wind">${storage.isKPH
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

export const renderFoundCities = (data) => {
  return `
  <div class="found-cities">
    ${data
      .map((city) => {
        return `
        <div class="found-cities-item city-found">
          <div class="city-found-name">${city.name}</div>
          <div class="city-found-icon"><i data-name="${city.name}" class="fa-solid fa-heart search"></i></div>
        </div>
      `;
      })
      .join('')}
  </div>
  `;
};

export const renderCustomNotification = (err) => {
  const html = customNotification(err);
  document.querySelector('#content').innerHTML = html;
  setTimeout(() => {
    document.querySelector('.error-wrapper').classList.add('show');
  }, 700);
  document
    .querySelector('.error-close')
    .addEventListener('click', removeCustomNotification);
};

export const customNotification = (err) => {
  return `
    <div class="error-wrapper">
      <article class="error">
        <span><i class="fas fa-exclamation-circle"></i></span>
        <p class="error-text">
          ${err}
        </p>
        <i class="error-close far fa-times-circle rui-cross"></i>
      </article>
    </div>
  `;
};

export const removeCustomNotification = (event) => {
  event.target.closest('.error-wrapper').remove();
};

export const saveCity = (card) => {
  const storage = JSON.parse(window.localStorage.getItem('storage'));
  storage.cards.push(card);
  window.localStorage.setItem('storage', JSON.stringify(storage));
};

export const updateCurrentWeather = () => {
  const storage = JSON.parse(window.localStorage.getItem('storage'));
  storage.cards.forEach((card, index) => {
    getCurrentWeather(BASE_URL, card.city).then((info) => {
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
    });
  });
  return storage;
};
