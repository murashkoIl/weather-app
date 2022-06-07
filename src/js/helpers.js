export const addHtmlToDom = (func) => {
	document.getElementById('content').innerHTML = func;
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