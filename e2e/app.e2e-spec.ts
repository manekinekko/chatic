import { ChaticPage } from './app.po';

describe('chatic App', () => {
  let page: ChaticPage;

  beforeEach(() => {
    page = new ChaticPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
