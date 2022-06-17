import './styles/index.scss';
import './js/pages/footer';
import './js/dataManager';
import { startRouterWatch } from './js/router';
import { homePage } from './js/pages/home/home';
import { settingsPage } from './js/pages/settings/settings';
import { errorPage } from './js/pages/error/error';
import { savedPage } from './js/pages/saved/saved';

startRouterWatch({
	'#home': homePage,
	'#saved': savedPage,
	'#settings': settingsPage,
	404: errorPage,
});


