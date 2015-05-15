class PageObject {
    constructor() {
        this.get()
    }

    get(url) {
        let baseUrl = browser.params.url;
        browser.get(`${baseUrl}/#${url}`);
    }

    wait(time) {
        browser.sleep(time ? time : 1000)
    }
}

export default PageObject;