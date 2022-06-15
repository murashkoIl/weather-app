import { getElementBySelector } from "../../helpers/dom";

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