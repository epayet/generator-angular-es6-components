import appComponents from './components/app/app.components.js';
import config from './app.config.js';
import constants from './app.constants.js';
import run from './app.run.js';

export default angular.module('app', [
        'ngRoute',
        appComponents.name
    ])
    .config(config)
    .constant('Constants', constants)
    .run(run)
    .controller('DefaultController', function ($scope, $routeParams) {
        $scope.$routeParams = $routeParams;
    })
;