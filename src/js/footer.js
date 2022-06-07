import { getElementBySelector } from './helpers';

const link = getElementBySelector('.footer-container');

const toggleActiveClass = event => {
	if (event.target.closest('.footer-item')) {
		const activeLink = getElementBySelector('.active');
		activeLink.classList.remove('active');
		event.target.classList.add('active');
	}
};

link.addEventListener('click', toggleActiveClass);
