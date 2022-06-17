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

export const getCities = async (url, text = '') => {
	if (text.length < 2) {
		return;
	}
	const citiesWeatherUrl = url + `/search.json?key=${API_KEY}&q=${text}`;

	const response = await fetch(citiesWeatherUrl, {
		method: 'GET',
	});

	if (!response.ok) {
		throw new Error(`Error! status: ${response.status}`);
	}

	const data = await response.json();
	return data.splice(0, 3);
};
