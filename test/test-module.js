'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-es6-components:component', function () {
    var destination = 'app/components';

    before(function (done) {
        helpers.run(path.join(__dirname, '../module'))
            .withArguments(['moduleName'])
            .withOptions({ skipInstall: true })
            .withPrompts({ })
            .on('end', done);
    });

    it('creates all the files', function () {
        assert.file([
            destination + '/name/name.js',
            destination + '/name/name.controller.js',
            destination + '/name/name.controller.spec.js',
            destination + '/name/name.service.js',
            destination + '/name/name.service.spec.js',
            destination + '/name/name.directive.js',
            destination + '/name/name.html',
            destination + '/name/name.css'
        ]);
    });
});
