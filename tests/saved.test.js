/**
 * @jest-environment jsdom
 */

import {
	renderSavedPage,
	deleteCity,
	saveCity,
} from '../src/js/pages/saved/savedRenders';
import { constructSavedPage } from '../src/js/pages/saved/saved';

describe('index.html', () => {
	it('Saved page was rendered', () => {
		expect(renderSavedPage.length).not.toBeNull();
	});

	it('Delete city method', () => {
		const example = [
			{
				city: 'Minsk',
			},
			{
				city: 'Brest',
			},
			{
				city: 'Grodno',
			},
		];
		const result = deleteCity('Minsk', example);
		expect(result).toStrictEqual([
			{
				city: 'Brest',
			},
			{
				city: 'Grodno',
			},
		]);
	});

	it('Save city method', () => {
		const example = [{ city: 'Brest' }, { city: 'Minsk' }];
		const result = saveCity({ city: 'Gomel' }, example);
		expect(result).toStrictEqual([
			{ city: 'Brest' },
			{ city: 'Minsk' },
			{ city: 'Gomel' },
		]);
	});

	it('Saved Page includes class attribute', () => {
		const savedPage = constructSavedPage();
		expect(savedPage.getAttribute('class')).not.toBeNull();
	});
});
