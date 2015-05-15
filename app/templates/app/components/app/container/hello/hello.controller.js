class HelloController {
    /*@ngInject*/
    constructor(helloService) {
        this.helloService = helloService;
    }

    sayHello () {
        this.hello = this.helloService.sayHello();
    }
}

export default HelloController;