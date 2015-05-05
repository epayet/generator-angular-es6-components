import <%= componentNameCaps %>Controller from './<%= componentName %>.controller.js';

describe('<%= componentNameCaps %>', function() {
    describe('Controller', function() {
        it('should say hello', function() {
            let <%= componentName %>Controller = new <%= componentNameCaps %>Controller();
            <%= componentName %>Controller.sayHello();
            expect(<%= componentName %>Controller.hello).toBe('hello');
        });
    });
});