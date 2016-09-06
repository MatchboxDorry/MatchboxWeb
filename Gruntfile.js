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
        },

        /*
        shell: {

            multiple: {
                command: [
                    'cd blog',
                    'jekyll build',
                    'jekyll serve'
                ].join('&&')
            },
        },

        watch: {
            files: [
                'blog/_site/*.html',
                'blog/_posts/*.markdown',
                'blog/_config.yml',
                'blog/index.html'
            ],
            tasks: ['shell'],
            options: {
                interrupt: true,
                atBegin: true
            }
        }
        */
    });

    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-watch');

    //grunt.registerTask('runjade', ['mkdir', 'copy', 'jade']);
    //grunt.registerTask('runblog', ['shell']);
    grunt.registerTask('default', ['mkdir', 'copy', 'jade']);
};
