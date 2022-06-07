import { getLocalStorageData, getElementBySelector } from "./helpers";

class Observer {
	constructor() {
		this.observers = [];
	}

	subscribe(fn) {
		this.observers.push(fn);
	}

	unsubscribe(fnToRemove) {
		this.observers = this.observers.filter(fn => {
			return fn !== fnToRemove;
		});
	}

	trigger() {
		this.observers.forEach(fn => {
			fn.call();
		});
	}
}

export const settingsObserver = new Observer();
export const themeObserver = new Observer();

const themeHandler = () => {
	const storage = getLocalStorageData();
	!storage.isDarkTheme
		? getElementBySelector('.wrapper').classList.add('light')
		: getElementBySelector('.wrapper').classList.remove('light');
};

themeObserver.subscribe(themeHandler);
