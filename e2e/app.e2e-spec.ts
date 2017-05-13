import { AngularProjectTestPage } from './app.po';

describe('angular-project-test App', () => {
  let page: AngularProjectTestPage;

  beforeEach(() => {
    page = new AngularProjectTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
