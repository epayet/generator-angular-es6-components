import HelloController from './hello.controller.js';
import HelloService from './hello.service.js';

describe('Hello', function() {
    describe('Controller', function() {
        it('should say hello', function() {
            var helloServiceMock = new HelloService();
            spyOn(helloServiceMock, 'sayHello').and.callFake(() => 'mockHello');
            let helloController = new HelloController(helloServiceMock);
            helloController.sayHello();
            expect(helloController.hello).toBe('mockHello');
        });
    });
});