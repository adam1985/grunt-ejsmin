/*
 * ejsmin
 * http://www.mptool.cn
 *
 * Copyright (c) 2015 adam1985
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('ejsmin', 'ejs模板压缩', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
      ext: '.ejs',
    });

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
      file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
		var fileSource = grunt.file.read(filepath);
		fileSource = fileSource.replace(/\n+[\s]*/g,"");
		// Write the destination file.
		console.log(filepath, file.dest);
		grunt.file.write(file.dest, fileSource);
		// Print a success message.
		grunt.log.writeln('File "' + file.dest + '" created.');
        return fileSource;
      });
    });
  });

};
