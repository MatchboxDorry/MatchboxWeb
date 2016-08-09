module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		


	  	mkdir: {
			all: {
		  	options: {
				mode: 0777,
				create: ['product']
		  	},
			},
	  	},


		copy: {
  			main: {
    			expand: true,
    			src: 'assets/**',
    			dest: 'product/',
  			},
		},

		jade: {
			  compile: {
				options: {
				  data: {
					debug: false
				  }
				},
				files: {"product/index.html": ["src/indexpagejade/index.jade"], "product/joinus.html": ["src/joinuspagejade/joinus.jade"]}
			  }
			}

	});

	grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jade');
	
	grunt.registerTask('default', ['mkdir','copy', 'jade']);
};

