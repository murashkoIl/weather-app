import { getCurrentWeather } from './../src/js/weather';

describe('index.html', () => {
	it('Home page was rendered', () => {
		expect(renderHomePage.length).not.toBeNull();
	});
});
