import { getContent, getInputSearch } from './selectors';

export const createBlock = (el, className = '') => {
	const block = document.createElement(el);
	block.className = className;
	return block;
};

export const getElementBySelector = selector => {
	return document.querySelector(selector);
};

export const appendHtmlElement = html => {
	getContent().appendChild(html);
};

export const clearPage = () => {
	getContent().innerHTML = '';
};

export const clearInputValue = () => {
	getInputSearch().value = '';
};
