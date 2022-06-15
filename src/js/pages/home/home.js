import { homePageTemplate } from '../../../templates/home.template';
import { createBlock, getElementBySelector } from '../../../helpers/dom';
import { renderHandler} from '../../../helpers/render';
import { getLocalStorageData } from '../../../helpers/localstorage';
import { emitter } from '../../../helpers/emitter';
import { renderLoader } from '../loader';

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
	const htmlObject = createBlock('div', 'loader-wrapper');
	htmlObject.innerHTML = renderHandler(renderLoader);

	if (!hash) {
		emitter.emit('getCurrentCity', { city: 'auto:ip', method: renderHomePage});
		window.scrollTo(0, 0);

		return htmlObject;
	} else {
		emitter.emit('getCurrentCity', { city: hash, method: renderHomePage});
		window.scrollTo(0, 0);

		return htmlObject;
	}
};


export const homePage = () => {
  getElementBySelector('#content').appendChild(constructHomePage());
};

export const checkingHomePageRendering = () => {
	if (getElementBySelector('.header-return') && window.location.hash.split('/')[1]) {
		const returnButton = getElementBySelector('.header-return');

		returnButton.style.display = 'block';
		returnButton.addEventListener('click', () => {
			document.location.assign('#saved');
		})
	}
}