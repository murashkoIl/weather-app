import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { homePageTemplate } from '../../templates/home.template';
import { addHtmlToDom, createBlock, getElementBySelector } from './../../helpers/dom';
import { renderHandler } from '../../helpers/render';
import { getLocalStorageData } from '../../helpers/localstorage';
import { emitter } from '../emitter';

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
	const htmlObject = createBlock('div', 'home-page');
	if (!hash) {

		emitter.emit('getCurrentCity', { city: 'auto:ip', method: renderHomePage, html: htmlObject});
		window.scrollTo(0, 0);
		return htmlObject;

		// getCurrentWeather(BASE_URL)
		// 	.then(data => {
		// 		addHtmlToDom(renderHandler(renderHomePage, data))
		// 		window.scrollTo(0, 0);
		// 	})
		// 	.catch(err => {
		// 		renderHandler(renderCustomNotification, err);
		// 	});

	} else {

		emitter.emit('getCurrentCity', { city: hash, method: renderHomePage, html: htmlObject});
		window.scrollTo(0, 0);
		return htmlObject;

		// getCurrentWeather(BASE_URL, hash)
		// 	.then(data => {
		// 		addHtmlToDom(renderHandler(renderHomePage, data));
		// 		const goBack = getElementBySelector('.header-return');
		// 		goBack.style.display = 'block';
		// 		goBack.addEventListener('click', () => {
		// 			window.location.hash = '#saved';
		// 		});
		// 		window.scrollTo(0, 0);
		// 	})
		// 	.catch(err => {
		// 		renderHandler(renderCustomNotification, err);
		// 	});
	}
};


export const homePage = () => {
  getElementBySelector('#content').appendChild(constructHomePage());
};