import {
	customNotificationTemplate,
	errorPageTemplate,
} from '../../../templates/error.template';
import { clearPage, createBlock } from '../../../helpers/dom';
import { renderHandler } from '../../../helpers/render';
import {
	getContent,
	getErrorClose,
	getErrorWrapper,
} from '../../../helpers/selectors';

export const renderErrorPage = () => {
	return errorPageTemplate();
};

export const renderCustomNotification = err => {
	const html = renderHandler(customNotification, err);

	const div = createBlock('div');
	div.innerHTML = html;
	getContent().appendChild(div);

	setTimeout(() => {
		getErrorWrapper().classList.add('show');
	}, 300);

	getErrorClose().addEventListener('click', removeCustomNotification);
};

export const customNotification = err => {
	return customNotificationTemplate(err);
};

export const removeCustomNotification = event => {
	event.preventDefault();
	event.target.closest('.error-wrapper').remove();
};

export const constructErrorPage = () => {
	const htmlObject = createBlock('div', 'error-page');
	htmlObject.innerHTML = renderHandler(renderErrorPage);
	return htmlObject;
};

export const errorPage = () => {
	clearPage();
	getContent().appendChild(constructErrorPage());
};
