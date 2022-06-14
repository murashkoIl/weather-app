import { createBlock, getElementBySelector, appendHtmlElement } from '../helpers/dom';
import { checkingLoaderPresence, renderHandler } from '../helpers/render';
import { emitter } from './emitter';
import { renderCustomNotification } from './error/error';
import { checkingHomePageRendering } from './home/home';
import { checkingSettingsPageRendering } from './settings/settings';
import { BASE_URL, getCities, getCurrentWeather } from './weather';
import { checkingSavedPageRendering, addOnInputListener, processCityClick } from './saved/saved';


emitter.subscribe('getCurrentCity', ({ city, method }) => {
	getCurrentWeather(BASE_URL, city)
		.then(data => {
      getElementBySelector('#content').innerHTML = '';
      const unsubscribe = emitter.subscribe('receiveCurrentCity', data => {
        const htmlObject = createBlock('div', 'content-wrapper');

        checkingSavedPageRendering(data);

        htmlObject.innerHTML = renderHandler(method, data);
        appendHtmlElement(htmlObject);

        checkingLoaderPresence();
        checkingSettingsPageRendering();
        checkingHomePageRendering();
        addOnInputListener();
      })
      emitter.emit('receiveCurrentCity', data);
      unsubscribe();
		})
		.catch(err => renderHandler(renderCustomNotification, err));
});

emitter.subscribe('getCities', ({ city }) => {
	getCities(BASE_URL, city)
		.then(data => {
			const unsubscribe = emitter.subscribe('receiveCities', data => {
        processCityClick(data);
      });

      emitter.emit('receiveCities', data);
      unsubscribe();
		})
		.catch(err => renderHandler(renderCustomNotification, err));
});

