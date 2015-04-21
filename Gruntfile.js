module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        /*
        concat: {
            options: {
                sourceMap: true,
                sourceMapName: "DS.sourceMap",
            },
            dist: {
                src: 'kahve/*.coffee',
                dest: 'kahve/DS.coffee'
            }
        },
        */
        coffee: {
            compileJoined: {
                options: {
                    join: true,
                    sourceMap: true,
                    sourceMapDir: 'dist/maps/'
                },
                files: {
                    'dist/DS.js': ['kahve/*.coffee'] // concat then compile into single file 
                }
                /*,
                            glob_to_multiple: {
                                expand: true,
                                flatten: true,
                                cwd: 'kahve/',
                                src: ['*.coffee'],
                                dest: 'dist/',
                                ext: '.js'
                            }*/
            }
        },
        jasmine: {

            pivotal: {
                src: 'dist/DS.js',
                options: {
                    specs: 'spec/**/*spec.js'
                },
                tasks: 'jasmine:pivotal:build'
            }

        },
        watch: {
            jasmine: {
                files: ['spec/**/*spec.js', 'dist/DS.js'],
                tasks: ['jasmine']
            },
            coffee: {
                files: ['kahve/*.coffee'],
                tasks: 'coffee'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['coffee', 'jasmine']);

};