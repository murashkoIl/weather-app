import './styles/index.scss';
import './js/footer';
import './js/dataManager';
import { startRouterWatch } from './js/router';
import { homePage } from './js/home/home';
import { settingsPage } from './js/settings/settings';
import { errorPage } from './js/error/error';
import { savedPage } from './js/saved/saved';

startRouterWatch({
	'#home': homePage,
	'#saved': savedPage,
	'#settings': settingsPage,
	404: errorPage
});
