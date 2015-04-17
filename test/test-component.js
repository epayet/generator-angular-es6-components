'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-es6-components:component', function () {
    var subDirectory = 'sub';
    var destination = 'custom/';

    before(function (done) {
        helpers.run(path.join(__dirname, '../component'))
            //.inDir(path.join( __dirname, '../test/component'))
            .withArguments(['name'])
            .withOptions({ skipInstall: true })
            .withPrompts({ subDirectory: subDirectory, destination: destination })
            .on('end', done);
    });

    it('creates all the files', function () {
        assert.file([
            destination + subDirectory + '/name/name.js',
            destination + subDirectory + '/name/name.controller.js',
            destination + subDirectory + '/name/name.controller.spec.js',
            destination + subDirectory + '/name/name.service.js',
            destination + subDirectory + '/name/name.service.spec.js',
            destination + subDirectory + '/name/name.directive.js',
            destination + subDirectory + '/name/name.html',
            destination + subDirectory + '/name/name.css',
        ]);
    });
});
