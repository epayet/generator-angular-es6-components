'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

module.exports = yeoman.generators.NamedBase.extend({
    prompting: function () {
        var done = this.async();
        var componentName = this._args[0];

        var prompts = [
            {
                type: 'String',
                name: 'destination',
                message: 'Where would you like to create the component? (root directory)',
                default: 'app/components'
            }, {
                type: 'String',
                name: 'subDirectory',
                message: 'The name of an eventual sub directory? Example: "sub". Default: none',
                default: ''
            }, {
                type: 'String',
                name: 'moduleName',
                message: 'The name of the module?',
                default: componentName
            }, {
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
        var destination = addSlashAtTheEndIfIsNot(this.props.destination)
            + addSlashAtTheEndIfIsNot(this.props.subDirectory);

        var args = {
            componentNameCaps: capitalizeFirstLetter(name),
            componentName: name,
            moduleName: this.props.moduleName,
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
        var directive = this.props.directiveName;
        var name = this._args[0];
        this.log('');
        this.log('Congratulations! You created the component ' + name + '. It will be usable as <' + directive + '></' + directive + '>');
    }
});


var getDirs = function (rootDir, cb) {
  fs.readdir(rootDir, function (err, files) {
    if(err) {
      console.log(err);
    }

    var dirs = [];
    for (var index = 0; index < files.length; ++index) {
      file = files[index];
      if (file[0] !== '.') {
        var filePath = rootDir + '/' + file;
        fs.stat(filePath, function (err, stat) {
          if (stat.isDirectory()) {
            dirs.push(file);
          }
          if (files.length === (index + 1)) {
            return cb(dirs);
          }
        });
      }
    }
  });
};

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addSlashAtTheEndIfIsNot(string) {
    var isSlash = string[string.length - 1] == '=';
    if (!isSlash) {
        string += '/';
    }
    return string;
}