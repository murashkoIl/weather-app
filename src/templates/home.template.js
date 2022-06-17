export const homePageTemplate = (data, storage, getDayName) => {
	const dayIndex = new Date(data.forecast.forecastday[0].date).getDay();

	return `
  <header>
  <div class="container">
      <div class="header-wrapper">
          <div class="header-info">
              <div class="header-info-wrapper">
                <div class="header-return"><i class="fa-solid fa-arrow-left-long"></i></div>
                <div class="header-city">${data.location.name}</div>
              </div>
              <div class="header-temparature">${
								storage.isCelcius ? data.current.temp_c : data.current.temp_f
							}º</div>
              <div class="header-status">${data.current.condition.text}</div>
          </div>
          <div class="header-icon"><img src="${
						data.current.condition.icon
					}" alt="Weather Icon"></div>
      </div>
      <div class="weather__info-container">

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
</header>
<section class="sunset-sunrise">
  <div class="container">
      <div class="sunset-wrapper">
          <div class="sunset-icon"><i class="fa-solid fa-moon"></i></div>
          <div class="sunset">${data.forecast.forecastday[0].astro.sunset}</div>
      </div>
      <div class="sunset-sunrise-divider"></div>
      <div class="sunrise-wrapper">
          <div class="sunrise-icon"><i class="fa-solid fa-sun"></i></div>
          <div class="sunrise">${
						data.forecast.forecastday[1].astro.sunrise
					}</div>
      </div>
  </div>
</section>
<section class="today__temp">
  <div class="container">
      <div class="today__temp-container">
          <div class="today__temp-flex-container">
              ${data.forecast.forecastday[0].hour
								.map(hour => {
									return `
                  <div class="today__temp-item today-item">
                    <div class="today-item__time">${hour.time.substr(
											10,
											hour.time.length
										)}</div>
                    <div class="today-item__icon"><img src="${
											hour.condition.icon
										}" alt="Wether Icon"></div>
                    <div class="today-item__degree">${
											storage.isCelcius ? hour.temp_c : hour.temp_f
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
              <div class="week-item__day item">${getDayName(dayIndex + 1)}</div>
              <div class="week-item__day item">${getDayName(dayIndex + 2)}</div>
          </div>

          <div class="week__temp-item week-item">
              <div class="week-item__icon item"><img src="${
								data.forecast.forecastday[1].day.condition.icon
							}" alt="Weather Icon"></div>
              <div class="week-item__icon item"><img src="${
								data.forecast.forecastday[2].day.condition.icon
							}" alt="Weather Icon"></div>
          </div>

          <div class="week__temp-item week-item">
              <div class="week-item__daytemp item">${
								storage.isCelcius
									? data.forecast.forecastday[1].day.maxtemp_c
									: data.forecast.forecastday[1].day.maxtemp_f
							}º</div>
              <div class="week-item__daytemp item">${
								storage.isCelcius
									? data.forecast.forecastday[2].day.maxtemp_c
									: data.forecast.forecastday[2].day.maxtemp_f
							}º</div>
          </div>

          <div class="week__temp-item week-item">
              <div class="week-item__nighttemp item">${
								storage.isCelcius
									? data.forecast.forecastday[1].day.mintemp_c
									: data.forecast.forecastday[2].day.mintemp_f
							}º</div>
              <div class="week-item__nighttemp item">${
								storage.isCelcius
									? data.forecast.forecastday[2].day.mintemp_c
									: data.forecast.forecastday[2].day.mintemp_f
							}º</div>
          </div>
      </div>
  </div>
</section>
  `;
};
