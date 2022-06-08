/**
 * @jest-environment jsdom
 */

 import { renderSettingsPage } from './../src/js/settings/settings';

 describe('index.html', () => {
   it('Settings page was rendered', () => {
     expect(renderSettingsPage.length).not.toBeNull();
   });
 });
 