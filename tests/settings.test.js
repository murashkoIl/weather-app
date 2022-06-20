/**
 * @jest-environment jsdom
 */

 import { getLocalStorageData } from '../src/helpers/localstorage';
import { renderSettingsPage, renderWindSpeed, renderTemperature } from '../src/js/pages/settings/settings';
import { BASE_URL, getCurrentWeather } from '../src/js/weather';

 describe('index.html', () => {
   it('Wind Speed', () => {
    getCurrentWeather(BASE_URL)
      .then(data => {
        expect(renderWindSpeed(data)).toContain('weather__info-wind-icon');
      })
      .catch(err => {
        expect(err.length).not.toBeNull();
      })
   });

   it('Temperature', () => {
    getCurrentWeather(BASE_URL)
      .then(data => {
        expect(renderTemperature(data)).toContain('city-temperature');
      })
      .catch(err => {
        expect(err.length).not.toBeNull();
      })
   });

   it('Settings Page', () => {
     const storage = getLocalStorageData();
    getCurrentWeather(BASE_URL)
      .then(data => {
        expect(renderSettingsPage(data)).toHaveReturnedWith(settingsPageTemplate(storage, data));
      })
      .catch(err => {
        expect(err.length).not.toBeNull();
      })
   });
 });
 