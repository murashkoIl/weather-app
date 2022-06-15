import { themeObserver } from './pages/settings/settings';
import { initializeLocalStorageData } from './../helpers/localstorage';

export const startRouterWatch = routes => {
	window.onload = () => {
		initializeLocalStorageData();
		themeObserver.trigger();
		window.location.hash = '#home';
		locationChangeHandler(routes);
	};

	window.addEventListener('hashchange', e => {
		e.preventDefault();
		locationChangeHandler(routes);
	});
};

export const locationChangeHandler = routes => {
	const hash = window.location.hash;
	const regex = /#city\/[a-zA-Z]{2,}/g;

	if (regex.exec(hash)) {
		routes['#home']();
		return;
	}

	if (!routes[hash]) {
		routes[404]();
	} else {
		routes[hash]();
	}
};
