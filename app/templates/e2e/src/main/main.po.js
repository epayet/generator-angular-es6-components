import PageObject from '../PageObject.js';

class SearchPageObject extends PageObject{
    get () {
        super.get('/main');
    }

    clickSayHello() {
        element(by.id('helloButton')).click();
    }

    getHelloMessage() {
        return element(by.id('helloMessage')).getText();
    }
}

export default SearchPageObject;