/**
 * @jest-environment jsdom
 */

 describe('index.html', () => {
   it('Footer was rendered', () => {
    const footer = document.getElementsByTagName('footer');
    expect(footer.length).not.toBeNull();
   });
 });
 