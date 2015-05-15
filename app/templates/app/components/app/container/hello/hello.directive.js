import HelloTemplate from './hello.html';

var HelloDirective = function() {
    return {
        restrict: 'E',
        template: HelloTemplate,
        controller: 'HelloController',
        controllerAs: 'component',
        bindToController: true,
        scope: {}
    };
};

export default HelloDirective;