import <%= componentNameCaps %>Directive from './<%= componentName %>.directive.js';
import <%= componentNameCaps %>Controller from './<%= componentName %>.controller.js';

export default angular.module('<%= moduleName %>.<%= componentName %>', [])
    .directive('<%= directiveName %>', <%= componentNameCaps %>Directive)
    .controller('<%= componentNameCaps %>Controller', <%= componentNameCaps %>Controller)
;