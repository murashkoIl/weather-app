import { getCurrentWeather, BASE_URL } from '../weather';
import { renderCustomNotification } from '../error/error';
import { homePageTemplate } from '../../templates/home.template';

export const renderHomePage = data => {
	const getDayName = dayIndex => {
		const days = [
			'Sunday',
			'Monday',
			'Tuesday',
			'Wednesday',
			'Thursday',
			'Friday',
			'Saturday'
		];
		return [...days, ...days][dayIndex];
	};

	const storage = JSON.parse(window.localStorage.getItem('storage'));

	return homePageTemplate(data, storage, getDayName);

};

export const constructHomePage = () => {
	const hash = window.location.hash.split('/')[1];
	if (!hash) {
		getCurrentWeather(BASE_URL)
			.then(data => {
				const html = renderHomePage(data);
				document.getElementById('content').innerHTML = html;
				window.scrollTo(0, 0);
			})
			.catch(err => {
				renderCustomNotification(err);
			});
	} else {
		getCurrentWeather(BASE_URL, hash)
			.then(data => {
				const html = renderHomePage(data);
				document.getElementById('content').innerHTML = html;
				const goBack = document.querySelector('.header-return');
				goBack.style.display = 'block';
				goBack.addEventListener('click', () => {
					window.location.hash = '#saved';
				});
				window.scrollTo(0, 0);
			})
			.catch(err => {
				renderCustomNotification(err);
			});
	}
};
