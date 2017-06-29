import { MyAppAng4Page } from './app.po';

describe('my-app-ang4 App', () => {
  let page: MyAppAng4Page;

  beforeEach(() => {
    page = new MyAppAng4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
