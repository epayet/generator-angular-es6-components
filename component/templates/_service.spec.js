import <%= componentNameCaps %>Service from './<%= componentName %>.service.js';

describe('<%= componentNameCaps %>', function() {
    describe('Service', function() {
        it('should say hello', function() {
            var <%= componentName %>Service = new <%= componentNameCaps %>Service();
            var hello = <%= componentName %>Service.sayHello();
            expect(hello).toBe('hello');
        });
    });
});