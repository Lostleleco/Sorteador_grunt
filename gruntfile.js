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
                mangle: true // Corrigido para adicionar valor booleano
            },
            my_target: {
                files: {
                    'dist/js/script.min.js': ['src/script.js']
                }
            }
        },
        htmlmin: {
            options: {
                removeComments: true, // Exemplo de configuração para htmlmin
                collapseWhitespace: true
            },
            my_target: {
                files: {
                    'dist/index.html': 'src/index.html' // Corrigido para minimizar HTML
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
            },
            html: {
                files: ['src/index.html'], // Adicionada a tarefa watch para HTML
                tasks: ['htmlmin']
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
    grunt.loadNpmTasks('grunt-contrib-htmlmin');

    grunt.registerTask('build', ['clean', 'less:production', 'uglify', 'htmlmin']);
    grunt.registerTask('default', ['build', 'watch']);
};
