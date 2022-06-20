import { getCurrentWeather, BASE_URL, getCities } from './../src/js/weather';

describe('index.html', () => {
	it('Current Weather', () => {
		const matchedObject = { current: {} }
		getCurrentWeather(BASE_URL).then(data => {
			expect(data).toMatchObject(matchedObject);
		}).catch(err => {
			expect(err.length).not.toBeNull();
		})
	});

	it('Determined City Weather', () => {
		getCities(BASE_URL, 'Brest').then(data => {
			expect(data.length).not.toBeUndefined();
		}).catch(err => {
			expect(err.length).not.toBeNull();
		})
	})
});
