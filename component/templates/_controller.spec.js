import <%= componentNameCaps %>Controller from './<%= componentName %>.controller.js';
import <%= componentNameCaps %>Service from './<%= componentName %>.service.js';

describe('<%= componentNameCaps %>', function() {
    describe('Controller', function() {
        it('should say hello', function() {

            let <%= componentName %>Service = new <%= componentNameCaps %>Service();
            spyOn(<%= componentName %>Service, 'sayHello').and.callFake(() => {
                return 'mockHello';
            });

            let <%= componentName %>Controller = new <%= componentNameCaps %>Controller(<%= componentName %>Service);
            <%= componentName %>Controller.sayHello();
            expect(<%= componentName %>Controller.hello).toBe('mockHello');
        });
    });
});