import { getElementBySelector } from "./dom";

export const renderHandler = (func, ...args) => {
	if (args.length) {
		return func.call(this, ...args);
	}
	return func();
};

export const renderLoader = () => {
	return `
		<div class='loader'>
			<div class="lds-dual-ring"></div>
		</div>
	`
}

export const checkingLoaderPresence = () => {
	if (getElementBySelector('.loader-wrapper')) {
		getElementBySelector('.loader-wrapper').style.display = 'none';
	}
}