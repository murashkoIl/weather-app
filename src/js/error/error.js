import {
	addHtmlToDom,
	renderHandler,
	createBlock,
	getElementBySelector,
} from '../helpers';

export const renderErrorPage = () => {
	return `
    <div class="error-container">
      <h1 class="error-404">404</h1>
      <div class="error-message">Something Went Wrong...</div>
    </div>
  `;
};

export const renderCustomNotification = err => {
	const html = renderHandler(customNotification, err);

	const div = createBlock('div');
	console.log(typeof div);
	div.innerHTML = html;
	getElementBySelector('#content').appendChild(div);

	setTimeout(() => {
		getElementBySelector('.error-wrapper').classList.add('show');
	}, 700);
  
	getElementBySelector('.error-close').addEventListener(
		'click',
		removeCustomNotification
	);
};

export const customNotification = err => {
	return `
    <div class="error-wrapper">
      <article class="error">
        <span><i class="fas fa-exclamation-circle"></i></span>
        <p class="error-text">
          ${err}
        </p>
        <i class="error-close far fa-times-circle rui-cross"></i>
      </article>
    </div>
  `;
};

export const removeCustomNotification = event => {
	event.target.closest('.error-wrapper').remove();
};

export const constructErrorPage = () => {
	addHtmlToDom(renderHandler(renderErrorPage));
};
