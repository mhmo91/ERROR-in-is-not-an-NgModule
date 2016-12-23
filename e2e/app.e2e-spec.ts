import { NotmodulePage } from './app.po';

describe('notmodule App', function() {
  let page: NotmodulePage;

  beforeEach(() => {
    page = new NotmodulePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
