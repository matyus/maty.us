module.exports = function(grunt){
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          style: 'expanded'
        },
        files: [
          {'css/teeth_main.css': 'sass/teeth_main.scss'},
          {'css/flag_main.css': 'sass/flag_main.scss'},
          {'css/bird_main.css': 'sass/bird_main.scss'},
          {'css/night_main.css': 'sass/night_main.scss'},
          {'css/boat_main.css': 'sass/boat_main.scss'}
        ]
      }
    },
    autoprefixer: {
      no_dest: {
        src: [
          'css/boat_main.css',
          'css/teeth_main.css',
          'css/flag_main.css',
          'css/bird_main.css',
          'css/night_main.css'
        ]
      }
    },
    watch: {
      css: {
        files: 'sass/**/**.scss',
        tasks: ['sass','autoprefixer']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  grunt.registerTask('default', ['watch']);
};
