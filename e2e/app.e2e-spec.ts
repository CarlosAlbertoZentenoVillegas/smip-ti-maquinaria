import { SmipTiMaquinariaPage } from './app.po';

describe('smip-ti-maquinaria App', () => {
  let page: SmipTiMaquinariaPage;

  beforeEach(() => {
    page = new SmipTiMaquinariaPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
