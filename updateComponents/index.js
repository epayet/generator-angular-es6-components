'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');
var util = require('../util/dir');

module.exports = yeoman.generators.Base.extend({
    writing: function () {
        var projectDir = process.cwd();
        var folderPath = projectDir + '/' + this.config.get('componentsLocation') + '/';
        var components = util.getDirs(folderPath);

        var fileContent = '';
        for(var i=0; i<components.length; i++) {
            var componentName = components[i];
            fileContent += "import " + componentName + "Component from './" + componentName + "/" + componentName + ".js';\n";
        }

        fileContent += "\nexport default angular.module('" + this.config.get('appName') + ".components', [\n";

        for(var i=0; i<components.length; i++) {
            var componentName = components[i];
            fileContent += "    " + componentName + 'Component.name,\n';
        }

        fileContent += ']);';

        fs.writeFileSync(folderPath + '/' + this.config.get('appName') + '.components.js', fileContent);
    }
});