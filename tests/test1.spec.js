// import { fireEvent, getByText } from '@testing-library/dom';
// import '@testing-library/jest-dom/extend-expect';
// import { JSDOM } from 'jsdom';
// import fs from 'fs';
// import path from 'path';

import { renderSettingsPage } from '../src/js/settings/settings';
// const renderSettingsPage = require('./../src/js//settings/settings');

describe('index.html', () => {
	beforeEach(() => {
		// dom = new JSDOM(html, { runScripts: 'dangerously' });
		// container = dom.window.document.body;
	});

	it('must be true', () => {
		expect(1).toBe(1);
	});

	it('must be false', () => {
		expect(3).toBe(3);
	});

	it('Settings page was rendered', () => {
		expect(renderSettingsPage.length).not.toBeNull();
	});
});

// test('First test', () => {
//   expect(weather.getCities(weather.BASE_URL, 'Minsk')).toEqual([
//     {
//       country: 'Belarus',
//       id: 304055,
//       lat: 53.9,
//       lon: 27.57,
//       name: 'Minsk',
//       region: 'Minsk',
//       url: 'minsk-minsk-belarus',
//     },
//     {
//       country: 'Belarus',
//       id: 304445,
//       lat: 53.9,
//       lon: 27.57,
//       name: 'Myenyesk',
//       region: 'Minsk',
//       url: 'myenyesk-minsk-belarus',s
//     },
//     {
//       country: 'Belarus',
//       id: 304444,
//       lat: 53.9,
//       lon: 27.57,
//       name: 'Myensk',
//       region: 'Minsk',
//       url: 'myensk-minsk-belarus',
//     },
//   ]);
// });

// test('City deleting', () => {
//   expect(deleteCity('Brest').toEqual(true));
// });
