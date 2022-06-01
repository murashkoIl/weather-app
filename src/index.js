import './styles/index.scss';
import './js/footer';
import { startRouterWatch } from './js/router';
import { constructHomePage } from './js/home/home';
import { constructSettingsPage } from './js/settings/settings';
import { constructErrorPage } from './js/error/error';
import { constructSavedPage } from './js/saved/saved';
import { settingsObserver } from './js/observer';

if (localStorage.getItem('storage') === null) {
	localStorage.setItem(
		'storage',
		JSON.stringify({
			isDarkTheme: true,
			isCelcius: true,
			isKPH: true,
			editMode: false,
			cards: [],
		})
	);
}

settingsObserver.subscribe(constructSettingsPage);

startRouterWatch({
	'#home': constructHomePage,
	'#saved': constructSavedPage,
	'#settings': constructSettingsPage,
	404: constructErrorPage,
});
