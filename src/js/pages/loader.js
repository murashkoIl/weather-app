import { getLoader, getWrapper } from '../../helpers/selectors';

export const renderLoader = () => {
	return `
		<div class='loader'>
			<div class="lds-dual-ring"></div>
		</div>
	`;
};

export const hideLoader = () => {
	if (getWrapper()) {
		getLoader().style.display = 'none';
	}
};

export const displayLoader = () => {
	getLoader().style.display = 'flex';
};
