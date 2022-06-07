export const addHtmlToDom = (func) => {
	getElementBySelector('#content').innerHTML = func;
};

export const getLocalStorageData = () => {
  return JSON.parse(window.localStorage.getItem('storage'));
}

export const saveLocalStorageData = (obj) => {
  window.localStorage.setItem('storage', JSON.stringify(obj));
}

export const renderHandler = (func, ...args) => {
  if (args.length) {
    return func.call(this, ...args);
  }
  return func();
};

export const createBlock = (el, className = '') => {
  const block = document.createElement(el);
  block.className = className;
  return block;
};

export const getElementBySelector = (selector) => {
  return document.querySelector(selector);
};