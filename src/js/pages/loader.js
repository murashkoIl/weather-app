import { getElementBySelector } from '../../helpers/dom';

export const renderLoader = () => {
	return `
		<div class='loader'>
			<div class="lds-dual-ring"></div>
		</div>
	`;
};

export const hideLoader = () => {
	if (getElementBySelector('.wrapper')) {
		getElementBySelector('.loader').style.display = 'none';
	}
};

export const displayLoader = () => {
	getElementBySelector('.loader').style.display = 'flex';
};
