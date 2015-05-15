/*@ngInject*/
function config($routeProvider) {
    $routeProvider.when('/main', {templateUrl: 'views/main.html', controller: 'DefaultController'});
    $routeProvider.otherwise({redirectTo: '/main'});
}

export default config;