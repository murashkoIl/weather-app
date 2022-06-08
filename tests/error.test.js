/**
 * @jest-environment jsdom
 */

 import { renderErrorPage } from './../src/js/error/error';

 describe('index.html', () => {
   it('Settings page was rendered', () => {
    const html = renderErrorPage();
    expect(html.includes('error-container')).not.toBeNull();
   });
 });
 