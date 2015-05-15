import "babel/polyfill";

import es6Promise from 'es6-promise';
es6Promise.polyfill();

import app from './app.js';

angular.element(document).ready(function () {
    angular.bootstrap(document, [app.name]);
});