import <%= componentNameCaps %>Template from './<%= componentName %>.html';

var <%= componentNameCaps %>Directive = function() {
    return {
        restrict: 'E',
        template: <%= componentNameCaps %>Template,
        controller: '<%= componentNameCaps %>Controller',
        controllerAs: 'component',
        bindToController: true,
        scope: {}
    };
};

export default <%= componentNameCaps %>Directive;