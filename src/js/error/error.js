import { customNotificationTemplate, errorPageTemplate } from '../../templates/error.template';
import {
	addHtmlToDom,
	renderHandler,
	createBlock,
	getElementBySelector,
} from '../helpers';

export const renderErrorPage = () => {
  return errorPageTemplate();
};

export const renderCustomNotification = err => {
	const html = renderHandler(customNotification, err);

	const div = createBlock('div');
	div.innerHTML = html;
	getElementBySelector('#content').appendChild(div);

	setTimeout(() => {
		getElementBySelector('.error-wrapper').classList.add('show');
	}, 300);

	getElementBySelector('.error-close').addEventListener(
		'click',
		removeCustomNotification
	);
};

export const customNotification = err => {
	return customNotificationTemplate(err);
};

export const removeCustomNotification = event => {
	event.target.closest('.error-wrapper').remove();
};

export const constructErrorPage = () => {
	addHtmlToDom(renderHandler(renderErrorPage));
};
