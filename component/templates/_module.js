import <%= componentNameCaps %>Directive from './<%= componentName %>.directive.js';
import <%= componentNameCaps %>Controller from './<%= componentName %>.controller.js';
import <%= componentNameCaps %>Service from './<%= componentName %>.service.js';

export default angular.module('<%= moduleName %>', [])
    .directive('<%= directiveName %>', <%= componentNameCaps %>Directive)
    .controller('<%= componentNameCaps %>Controller', <%= componentNameCaps %>Controller)
    .service('<%= componentName %>Service', <%= componentNameCaps %>Service)
;