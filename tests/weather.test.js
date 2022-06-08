import { getCurrentWeather, BASE_URL, getCities } from './../src/js/weather';

describe('index.html', () => {
	it('current weather', () => {
		getCurrentWeather(BASE_URL).then(data => {
			expect(data.length).not.toBeNull();
		}).catch(err => {
			expect(err.length).not.toBeNull();
		})
	});

	it('determined city weather', () => {
		getCities(BASE_URL, 'Brest').then(data => {
			expect(data.length).not.toBeNull();
		}).catch(err => {
			expect(err.length).not.toBeNull();
		})
	})
});
