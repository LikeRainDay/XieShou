import { XieShouPage } from './app.po';

describe('xie-shou App', () => {
  let page: XieShouPage;

  beforeEach(() => {
    page = new XieShouPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
