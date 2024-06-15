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
                mangle: false // Evita a minificação de nomes
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
                tasks: ['less:production'],
                options: {
                    livereload: true // Ativa o livereload para recarregar o navegador automaticamente
                }
            },
            js: {
                files: ['src/script.js'],
                tasks: ['uglify'],
                options: {
                    livereload: true // Ativa o livereload para recarregar o navegador automaticamente
                }
            }
        }
    });

    // Carrega plugins do Grunt necessários
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Define a tarefa "build" que engloba less:production, uglify e watch
    grunt.registerTask('build', ['less:production', 'uglify']);

    // Tarefa padrão, que executa build e watch
    grunt.registerTask('default', ['build', 'watch']);
};
