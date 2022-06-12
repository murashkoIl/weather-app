import './styles/index.scss';
import './js/footer';
import './js/dataManager';
import { startRouterWatch } from './js/router';
import { constructHomePage, homePage } from './js/home/home';
import { constructSettingsPage, settingsPage } from './js/settings/settings';
import { errorPage } from './js/error/error';
import { constructSavedPage } from './js/saved/saved';

startRouterWatch({
	'#home': homePage,
	'#saved': constructSavedPage,
	'#settings': settingsPage,
	404: errorPage
});

