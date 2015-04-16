import <%= componentNameCaps %>Controller from './<%= componentName %>.controller.js';

describe('<%= componentNameCaps %>', function() {
    describe('Controller', function() {
        it('should say hello', function() {
            class <%= componentNameCaps %>ServiceMock {
                sayHello () {
                    return 'mockHello';
                }
            }

            let <%= componentName %>Controller = new <%= componentNameCaps %>Controller(new <%= componentNameCaps %>ServiceMock());
            <%= componentName %>Controller.sayHello();
            expect(<%= componentName %>Controller.hello).toBe('mockHello');
        });
    });
});