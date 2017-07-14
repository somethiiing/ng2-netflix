import { Ng2NetflixPage } from './app.po';

describe('ng2-netflix App', () => {
  let page: Ng2NetflixPage;

  beforeEach(() => {
    page = new Ng2NetflixPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
