import { getActive, getFooterContainer } from '../../helpers/selectors';

const link = getFooterContainer();

const toggleActiveClass = event => {
	if (event.target.closest('.footer-item')) {
		const activeLink = getActive();
		activeLink.classList.remove('active');
		event.target.classList.add('active');
	}
};

link.addEventListener('click', toggleActiveClass);
