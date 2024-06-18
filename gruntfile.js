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
                mangle: false // desativa o mapeamento de nomes das variáveis
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
        },
        clean: {
            build: ['dist']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');

    grunt.registerTask('build', ['clean', 'less:production', 'uglify']);
    grunt.registerTask('default', ['build', 'watch']);
};
