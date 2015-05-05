'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = yeoman.generators.NamedBase.extend({
    prompting: function () {
        var done = this.async();
        var componentName = this._args[0];
        var appName = this.config.get('appName');
        var moduleFile = appName ? appName + '.components.js' : 'components.js';

        var prompts = [
            {
                type: 'String',
                name: 'directiveName',
                message: 'The name of the directive? It will be usable as <' + componentName + '></' + componentName + '>',
                default: componentName
            }, {
                type: 'confirm',
                name: 'generateService',
                message: 'Generate a service ?',
                default: true
            }, {
                type: 'confirm',
                name: 'updateParentModule',
                message: 'Update the parent module ? (' + moduleFile + ')',
                default: true
            }
        ];

        this.prompt(prompts, function (props) {
            this.props = props;
            // To access props later use this.props.someOption;

            done();
        }.bind(this));
    },

    writing: function () {
        var name = this._args[0];

        var componentsLocation = this.config.get('componentsLocation') ? this.config.get('componentsLocation') : 'app/components';
        var destination = componentsLocation + '/';

        var args = {
            componentNameCaps: capitalizeFirstLetter(name),
            componentName: name,
            moduleName: this.config.get('appName') ? this.config.get('appName') : 'app',
            directiveName: this.props.directiveName
        };

        var files = [{
            from: '_directive.js',
            to: '.directive.js'
        }, {
            from: '_html.html',
            to: '.html'
        }, {
            from: '_css.css',
            to: '.css'
        }];

        if(this.props.generateService) {
            files.push({
                from: '_service.js',
                to: '.service.js'
            });
            files.push({
                from: '_service.spec.js',
                to: '.service.spec.js'
            });
            files.push({
                from: '_module.js',
                to: '.js'
            });
            files.push({
                from: '_controller.js',
                to: '.controller.js'
            });
            files.push({
                from: '_controller.spec.js',
                to: '.controller.spec.js'
            });
        } else {
            files.push({
                from: '/withoutService/_module.js',
                to: '.js'
            });
            files.push({
                from: '/withoutService/_controller.js',
                to: '.controller.js'
            });
            files.push({
                from: '/withoutService/_controller.spec.js',
                to: '.controller.spec.js'
            });
        }

        for(var i=0; i<files.length; i++) {
            this.fs.copyTpl(
                this.templatePath(files[i].from),
                this.destinationPath(destination + name + '/' + name + files[i].to),
                args
            );
        }
    },

    end: function() {
        if(this.props.updateParentModule) {
            this.composeWith('angular-es6-components:updateComponents');
        }
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}