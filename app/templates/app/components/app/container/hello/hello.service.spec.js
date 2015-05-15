import HelloService from './hello.service.js';

describe('Toto', function() {
    describe('Service', function() {
        it('should say hello', function() {
            var totoService = new HelloService();
            var hello = totoService.sayHello();
            expect(hello).toBe('hello');
        });
    });
});