const link = document.querySelector('.footer-container');

const toggleActiveClass = (event) => {
	if (event.target.closest('.footer-item')) {
		const activeLink = document.querySelector('.active');
		activeLink.classList.remove('active');
		event.target.classList.add('active');
	}
};

link.addEventListener('click', toggleActiveClass);
