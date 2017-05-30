import { MiskiPage } from './app.po';

describe('miski App', () => {
  let page: MiskiPage;

  beforeEach(() => {
    page = new MiskiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
