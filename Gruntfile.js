module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		
		jade: {
			  compile: {
				options: {
				  data: {
					debug: false
				  }
				},
				files: {"index.html": ["index.jade"], "joinus.html": ["joinus.jade"]}
			  }
			}
	});

	grunt.loadNpmTasks('grunt-contrib-jade');

};
