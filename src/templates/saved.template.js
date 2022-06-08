export const foundCitiesTemplate = data => {
	return `
  <div class="found-cities">
    ${data
			.map(city => {
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

export const savedPageTemplate = func => {
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
            ${func()}
          </div>
      </div>
    </section>
  `;
};

export const savedCitiesTemplate = storage => {
	return `
  ${storage.cards
		.map(card => {
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
