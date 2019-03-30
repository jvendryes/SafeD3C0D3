import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;
    const validJwt =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwiY29udGVudCI6Ikluc2VydCBhIEpXVCBoZXJlLi4uIiwiaWF0IjoxNTE2MjM5MDIyfQ.c7NcTfSF23L0XOS_jiXzaH_jWziqcbi1poVyOMbXaQ0';
    const invalidJwt = 'a.b.c';
    const errorMsgJwt = "The decoded input couldn't be processed as JSON";
    const validB64 = 'SW5zZXJ0IGEgQmFzZTY0IGVuY29kZWQgc3RyaW5nIGhlcmUuLi4=';
    const invalidB64 = 'aaaaaaaa';
    const errorMsgB64 = "The supplied input doesn't appear to be properly Base64 encoded";

    beforeEach(() => {
        page = new AppPage();
    });

    it('should navigate to the JWT Decode page by default', () => {
        page.navigateTo('/');
        expect(page.getCurrentRoute()).toContain('/decoder/jwt');
    });

    it('should decode a valid JWT', () => {
        page.navigateTo('/decoder/jwt');
        page.getInput()
            .sendKeys(validJwt)
            .then(() => expect(page.getDecodedJwtHeader().getText()).not.toEqual(errorMsgJwt));
        page.getInput().clear();
        page.getInput()
            .sendKeys(validJwt)
            .then(() => expect(page.getDecodedJwtPayload().getText()).not.toEqual(errorMsgJwt));
    });

    it('should NOT decode an invalid JWT', () => {
        page.navigateTo('/decoder/jwt');
        page.getInput()
            .sendKeys(invalidJwt)
            .then(() => expect(page.getDecodedJwtHeader().getText()).toEqual(errorMsgJwt));
        page.getInput().clear();
        page.getInput()
            .sendKeys(invalidJwt)
            .then(() => expect(page.getDecodedJwtPayload().getText()).toEqual(errorMsgJwt));
    });

    it('should decode a valid Base64 string', () => {
        page.navigateTo('/decoder/base64');
        page.getInput()
            .sendKeys(validB64)
            .then(() => expect(page.getDecodedB64().getText()).not.toEqual(errorMsgB64));
        page.getInput().clear();
        page.getInput()
            .sendKeys(validB64)
            .then(() => expect(page.getDecodedB64().getText()).not.toEqual(errorMsgB64));
    });

    it('should NOT decode an invalid Base64 string', () => {
        page.navigateTo('/decoder/base64');
        page.getInput()
            .sendKeys(invalidB64)
            .then(() => expect(page.getDecodedB64().getText()).toEqual(errorMsgB64));
        page.getInput().clear();
        page.getInput()
            .sendKeys(invalidB64)
            .then(() => expect(page.getDecodedB64().getText()).toEqual(errorMsgB64));
    });
});
