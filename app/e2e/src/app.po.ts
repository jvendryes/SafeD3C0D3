import { browser, by } from 'protractor';

export class AppPage {
    navigateTo(url: string) {
        return browser.get(url);
    }

    getCurrentRoute() {
        return browser.getCurrentUrl();
    }

    getInput() {
        return browser.findElement(by.tagName('textarea'));
    }

    getDecodedJwtHeader() {
        return browser.findElement(by.tagName('pre[class=jwt-header]'));
    }

    getDecodedJwtPayload() {
        return browser.findElement(by.tagName('pre[class=jwt-payload]'));
    }

    getDecodedB64() {
        return browser.findElement(by.tagName('pre'));
    }
}
