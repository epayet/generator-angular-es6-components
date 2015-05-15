import MainPageObject from './main.po.js';

describe('Search', function() {
    let mainPageObject;

    beforeEach(() => {
        mainPageObject = new MainPageObject();
    });

    it('should say hello', () => {
        mainPageObject.clickSayHello();
        expect(mainPageObject.getHelloMessage()).toBe('hello');
    });
});