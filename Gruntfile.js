module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    nodeunit: {
      all: ['test/**/*.js']
    },
    jshint: {
      all: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js'],
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        node: true,
        strict: false,
        globals: {}
      }
    },
    watch: {
      files: ['Gruntfile.js', 'tasks/**/*.js', 'test/**/*.js'],
      tasks: ['default']
    }
  });

  // Load local tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task.
  grunt.registerTask('default', ['jshint', 'nodeunit']);

};
