module.exports = function(grunt) {
    var files = {
        js: ['src/js/**/*.js'],
        jade: ['src/jade/**/*.jade'],
        css: ['src/css/**/*.css']
    };

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // Javascript
        jshint: {
            all: {
                options: {
                    jshintrc: true
                },
                files: {
                    src: files.js
                }
            }
        },
        // Jade
        jade: {
            compile: {
                options: {
                    pretty: true,
                    data: {
                        debug: true
                    }
                },
                files: {
                    "index.html": ["src/jade/index.jade"]
                }
            }
        },
        // CSS
        compass: {
            dist: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css',
                    environment: 'production'
                }
            },
            dev: {
                options: {
                    sassDir: 'sass',
                    cssDir: 'css'
                }
            }
        },
        // Magic tasks
        watch: {
            options: {
                livereload: true
            },
            js: {
                files: files.js,
                tasks: ['jshint', 'copy:js']
            },
            jade: {
                files: files.jade,
                tasks: ['jade']
            },
            css: {
                files: files.css,
                tasks: ['copy:css']
            }
        },
        bowercopy: {
            options: {
                srcPrefix: 'bower_components',
                clean: true
            },
            vendor: {
                options: {
                    destPrefix: 'dist/vendor'
                },
                files: {
                    'css/normalize.css': 'skeleton-css/css/normalize.css',
                    'css/skeleton.css': 'skeleton-css/css/skeleton.css',
                }
            }
        }
    });


    grunt.registerTask(
        'build', [
            'bowercopy',
            'jade'
        ]
    );

    grunt.registerTask(
        'default', [
            'build',
            'watch'
        ]
    );

    grunt.loadNpmTasks('grunt-bowercopy');
    grunt.loadNpmTasks('grunt-contrib-jade');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
