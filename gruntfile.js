module.exports = function(grunt) {
    grunt.initConfig({
        less: {
            production: {
                files: {
                    "dist/css/style.css": "src/less/style.less"
                }
            }
        },
        uglify: {
            options: {
                mangle: false 
            },
            my_target: {
                files: {
                    'dist/js/script.min.js': ['src/script.js'] 
                }
            }
        },
        watch: {
            less: {
                files: ['src/less/**/*.less'],
                tasks: ['less:production']
            },
            js: {
                files: ['src/script.js'], 
                tasks: ['uglify']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['less:production', 'uglify', 'watch']);
};
