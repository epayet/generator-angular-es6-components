'use strict';

var path = require('path');
var assert = require('yeoman-generator').assert;
var helpers = require('yeoman-generator').test;
var os = require('os');

describe('angular-es6-components:component', function () {
    before(function (done) {
        helpers.run(path.join(__dirname, '../component'))
            //.inDir(path.join( __dirname, '../test/component'))
            .withArguments(['name'])
            .withOptions({ skipInstall: true })
            .withPrompts({ html: true, css:true, directive: true, service: true })
            .on('end', done);
    });

    it('creates all the files', function () {
        assert.file([
            'name.js',
            'name.controller.js',
            'name.controller.spec.js',
            'name.service.js',
            'name.service.spec.js',
            'name.directive.js',
            'name.html',
            'name.css',
        ]);
    });
});
