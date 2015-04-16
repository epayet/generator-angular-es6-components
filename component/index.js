'use strict';
var yeoman = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');
var fs = require('fs');

module.exports = yeoman.generators.NamedBase.extend({
  prompting: function () {
    var done = this.async();

    // Have Yeoman greet the user.
    //this.log(yosay(
    //  'Welcome to the funkadelic ' + chalk.red('Angular ES6 Components') + ' generator!'
    //));

    //getDirs(__dirname + '/app/components', function (modules) {
    //  console.log(modules);
    //});



    var prompts = [
    //  {
    //  type: 'String',
    //  name: 'path',
    //  message: 'Where would you like to create the component?',
    //  default: 'app/components'
    //}
    ];

    this.prompt(prompts, function (props) {
      this.props = props;
      // To access props later use this.props.someOption;

      done();
    }.bind(this));
  },

  writing: {
    app: function () {
      var name = this._args[0];
      var nameWithCaps = name;
      nameWithCaps[0] = nameWithCaps[0].toUpperCase();

      var args = {componentNameCaps: nameWithCaps, componentName: name};
      this.fs.copy(
        this.templatePath('_module.js'),
        this.destinationPath(name + '.js'),
        args
      );
      this.fs.copy(
          this.templatePath('_controller.js'),
          this.destinationPath(name + '.controller.js'),
          args
      );
      this.fs.copy(
          this.templatePath('_controller.spec.js'),
          this.destinationPath(name + '.controller.spec.js'),
          args
      );
      this.fs.copy(
          this.templatePath('_service.js'),
          this.destinationPath(name + '.service.js'),
          args
      );
      this.fs.copy(
          this.templatePath('_service.spec.js'),
          this.destinationPath(name + '.service.spec.js'),
          args
      );
      this.fs.copy(
          this.templatePath('_directive.js'),
          this.destinationPath(name + '.directive.js'),
          args
      );
      this.fs.copy(
          this.templatePath('_html.html'),
          this.destinationPath(name + '.html')
      );
      this.fs.copy(
          this.templatePath('_css.css'),
          this.destinationPath(name + '.css')
      );
    }
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