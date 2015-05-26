var fs = require('fs');

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

exports.getDirs = getDirs;