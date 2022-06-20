/**
 * @jest-environment jsdom
 */

 import { renderErrorPage, customNotification } from '../src/js/pages/error/error';

 describe('index.html', () => {
   it('Settings page was rendered', () => {
    const html = renderErrorPage();
    expect(html.includes('error-container')).not.toBeNull();
   });

   it('Custom notification was rendered', () => {
    const html = customNotification();
    expect(html.includes('error-wrapper')).toBe(true);
   });
 });
 