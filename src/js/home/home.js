import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { homePageTemplate } from '../../templates/home.template';
import { addHtmlToDom, getElementBySelector, getLocalStorageData, renderHandler } from '../helpers';

export const renderHomePage = data => {
	const getDayName = dayIndex => {
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];
		return [...days, ...days][dayIndex];
	};

	const storage = getLocalStorageData();

	return renderHandler(homePageTemplate, data, storage, getDayName);
};

export const constructHomePage = () => {
	const hash = window.location.hash.split('/')[1];
	if (!hash) {
		getCurrentWeather(BASE_URL)
			.then(data => {
				addHtmlToDom(renderHandler(renderHomePage, data))
				window.scrollTo(0, 0);
			})
			.catch(err => {
				renderHandler(renderCustomNotification, err);
			});
			
	} else {
		getCurrentWeather(BASE_URL, hash)
			.then(data => {
				addHtmlToDom(renderHandler(renderHomePage, data));
				const goBack = getElementBySelector('.header-return');
				goBack.style.display = 'block';
				goBack.addEventListener('click', () => {
					window.location.hash = '#saved';
				});
				window.scrollTo(0, 0);
			})
			.catch(err => {
				renderHandler(renderCustomNotification, err);
			});
	}
};
