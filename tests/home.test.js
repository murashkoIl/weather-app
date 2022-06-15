/**
 * @jest-environment jsdom
 */

import { renderHomePage } from '../src/js/pages/home/home';

describe('index.html', () => {
	it('Home page was rendered', () => {
		expect(renderHomePage.length).not.toBeNull();
	});
});
