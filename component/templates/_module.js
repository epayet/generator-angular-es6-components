import <%= componentNameCaps %>Directive from './<%= componentName %>.directive.js';
import <%= componentNameCaps %>Controller from './<%= componentName %>.controller.js';
import <%= componentNameCaps %>Service from './<%= componentName %>.service.js';

export default angular.module('app.<%= componentName %>', [])
    .directive('<%= componentName %>', <%= componentNameCaps %>Directive)
    .controller('<%= componentNameCaps %>Controller', <%= componentNameCaps %>Controller)
    .service('<%= componentName %>Service', <%= componentNameCaps %>Service)
;