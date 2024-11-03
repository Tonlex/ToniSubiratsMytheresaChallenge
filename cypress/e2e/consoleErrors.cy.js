import AboutPage from '../pageObjects/aboutPage';

describe('Console Errors Check', () => {
  it('Should not have console errors on the About page', () => {
    AboutPage.visit();
    AboutPage.checkNoConsoleErrors();
  });
});
