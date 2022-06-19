import { homePageTemplate } from '../../../templates/home.template';
import { createBlock, clearPage } from '../../../helpers/dom';
import { renderHandler } from '../../../helpers/render';
import { getLocalStorageData } from '../../../helpers/localstorage';
import { emitter } from '../../../helpers/emitter';
import { hideLoader, displayLoader } from '../loader';
import { getContent, getHeaderReturn } from '../../../helpers/selectors';

export const renderHomePage = data => {
	const getDayName = dayIndex => {
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

	const storage = getLocalStorageData();

	return renderHandler(homePageTemplate, data, storage, getDayName);
};

export const constructHomePage = () => {
	const hash = window.location.hash.split('/')[1];
	const homeHtmlObject = createBlock('div', 'home-wrapper');

	if (!hash) {
		const unsbuscribe = emitter.subscribe('receiveCurrentCity', data => {
			homeHtmlObject.innerHTML = renderHandler(renderHomePage, data);

			hideLoader();
			unsbuscribe();
		});
		emitter.emit('getCurrentCity', { city: 'auto:ip' });

		return homeHtmlObject;
	} else {
		const unsbuscribe = emitter.subscribe('receiveCurrentCity', data => {
			homeHtmlObject.innerHTML = renderHandler(renderHomePage, data);

			checkingHomePageRendering();
			hideLoader();
			unsbuscribe();
		});
		emitter.emit('getCurrentCity', { city: hash });

		return homeHtmlObject;
	}
};

export const homePage = () => {
	displayLoader();
	clearPage();
	getContent().appendChild(constructHomePage());
	window.scrollTo(0, 0);
};

export const checkingHomePageRendering = () => {
	if (window.location.hash.includes('/')) {
		const returnButton = getHeaderReturn();

		returnButton.style.display = 'block';
		returnButton.addEventListener('click', () => {
			document.location.assign('#saved');
		});
	}
};
