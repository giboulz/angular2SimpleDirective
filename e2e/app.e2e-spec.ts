import { MyTestingAngular2Page } from './app.po';

describe('my-testing-angular2 App', function() {
  let page: MyTestingAngular2Page;

  beforeEach(() => {
    page = new MyTestingAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
