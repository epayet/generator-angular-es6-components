'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

var noModuleKey = 'No module at all';

module.exports = yeoman.generators.NamedBase.extend({
    prompting: function () {
        var done = this.async();
        var componentName = this._args[0];

        //var projectDir = process.cwd();
        //try {
        //    var modules = getDirs(projectDir + '/' + this.config.get('modulesLocation'));
        //} catch (err) {
        //    this.log(chalk.red(err.message));
        //    this.log(chalk.red('I were not able to find the modules folder, check the .yo-rc.json file'));
        //    this.emit('error', 'Modules folder not found');
        //    return done();
        //}

        //modules.push(noModuleKey);

        var prompts = [
            {
                type: 'String',
                name: 'directiveName',
                message: 'The name of the directive? It will be usable as <' + componentName + '></' + componentName + '>',
                default: componentName
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

        //var modulePath = this.props.module + '/';
        //if(this.props.module == noModuleKey) {
        //    modulePath = '';
        //}

        var destination = this.config.get('componentsLocation') + '/';

        var args = {
            componentNameCaps: capitalizeFirstLetter(name),
            componentName: name,
            moduleName: this.props.module == noModuleKey ? name : this.props.module,
            directiveName: this.props.directiveName
        };

        var files = [{
            from: '_module.js',
            to: '.js'
        }, {
            from: '_controller.js',
            to: '.controller.js'
        }, {
            from: '_controller.spec.js',
            to: '.controller.spec.js'
        }, {
            from: '_service.js',
            to: '.service.js'
        }, {
            from: '_service.spec.js',
            to: '.service.spec.js'
        }, {
            from: '_directive.js',
            to: '.directive.js'
        }, {
            from: '_html.html',
            to: '.html'
        }, {
            from: '_css.css',
            to: '.css'
        }];

        for(var i=0; i<files.length; i++) {
            this.fs.copyTpl(
                this.templatePath(files[i].from),
                this.destinationPath(destination + name + '/' + name + files[i].to),
                args
            );
        }
    },

    end: function() {
        this.composeWith('angular-es6-components:updateComponents');
    }
});

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}