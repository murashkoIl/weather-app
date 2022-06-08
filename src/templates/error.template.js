export const customNotificationTemplate = err => {
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
}

export const errorPageTemplate = () => {
  return `
    <div class="error-container">
      <h1 class="error-404">404</h1>
      <div class="error-message">Something Went Wrong...</div>
    </div>
`;
}