import { customNotificationTemplate, errorPageTemplate } from '../../../templates/error.template';
import { createBlock, getElementBySelector } from '../../../helpers/dom';
import { renderHandler } from '../../../helpers/render';

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
	event.preventDefault();
	event.target.closest('.error-wrapper').remove();
};

export const constructErrorPage = () => {
  const htmlObject = createBlock('div', 'error-page');
  htmlObject.innerHTML = renderHandler(renderErrorPage);
  return htmlObject; 
};

export const errorPage = () => {
	getElementBySelector('#content').innerHTML = '';
  getElementBySelector('#content').appendChild(constructErrorPage());
};
