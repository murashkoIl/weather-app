/**
 * @jest-environment jsdom
 */

import { renderHomePage } from './../src/js/home/home';

describe('index.html', () => {
	it('Home page was rendered', () => {
		expect(renderHomePage.length).not.toBeNull();
	});
});
