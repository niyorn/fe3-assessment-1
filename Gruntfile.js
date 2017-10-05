module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {
          'stylesheet/main.css': 'stylesheet/sass/main.scss'
        }
      }
    },
    autoprefixer: {
      no_dest_single: {
        src: 'stylesheet/main.css'
      },
    },
    watch: {
      css: {
        files: '**/*.scss',
        tasks: ['sass']
      },
      autoprefixer: {
        files: '**/*.scss',
        tasks: ['autoprefixer']
      },
      babel: {
        files: 'script/babel/main.js',
        tasks: ['babel']
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.registerTask('default', ['watch']);
}
