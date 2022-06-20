/**
 * @jest-environment jsdom
 */

import { constructHomePage, renderHomePage } from '../src/js/pages/home/home';

describe('index.html', () => {
	it('Home page has home-wrapper attribute', () => {
		expect(constructHomePage().getAttribute('class')).toBe('home-wrapper');
	});

	it('Home page was rendered', () => {
		expect(renderHomePage.length).not.toBeNull();
	});
});
