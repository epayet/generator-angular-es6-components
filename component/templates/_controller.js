class <%= componentNameCaps %>Controller {
    /*@ngInject*/
    constructor(<%= componentName %>Service) {
        this.<%= componentName %>Service = <%= componentName %>Service;
    }

    sayHello () {
        this.hello = this.<%= componentName %>Service.sayHello();
    }
}

export default <%= componentNameCaps %>Controller;