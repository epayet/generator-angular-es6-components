'use strict';
var yeoman = require('yeoman-generator');
var fs = require('fs');

module.exports = yeoman.generators.Base.extend({
    writing: function () {
        var projectDir = process.cwd();
        var folderPath = projectDir + '/' + this.config.get('componentsLocation') + '/';
        var components = getDirs(folderPath);

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


var getDirs = function (rootDir) {
    var files = fs.readdirSync(rootDir);
    var dirs = [];
    for (var index = 0; index < files.length; ++index) {
        var file = files[index];
        if (file[0] !== '.') {
            var filePath = rootDir + '/' + file;
            var stat = fs.statSync(filePath);
            if (stat.isDirectory()) {
                dirs.push(file);
            }
            if (files.length === (index + 1)) {
                return dirs;
            }
        }
    }
    return dirs;
};