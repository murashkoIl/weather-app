export const createBlock = (el, className = '') => {
	const block = document.createElement(el);
	block.className = className;
	return block;
};

export const getElementBySelector = selector => {
	return document.querySelector(selector);
};

export const addHtmlToDom = func => {
	getElementBySelector('#content').innerHTML = func;
};

export const appendHtmlElement = html => {
	getElementBySelector('#content').appendChild(html);
};

export const clearPage = () => {
	getElementBySelector('#content').innerHTML = '';
};

export const clearInputValue = () => {
	getElementBySelector('.input-search').value = '';
};