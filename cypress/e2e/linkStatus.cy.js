import HomePage from '../pageObjects/homePage';

describe('Link Status Check', () => {
  it('Should ensure all links return valid status codes', () => {
    HomePage.visit();
    HomePage.checkAllLinksStatus();
  });
});
