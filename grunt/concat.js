var concat = [
  // Bower components
  'src/global/bower_components/jquery/dist/jquery.js',
  'src/global/bower_components/bootstrap-sass-official/assets/javascripts/bootstrap.js',

  // Third party components
  'src/global/bower_components/fullpage.js/jquery.fullPage.js',
  'src/global/third-party-plugins/**/*.js',

  // Global components
  'src/global/components/**/*.js', 

  // Ignore
  '!src/**/*.min.js'
];

module.exports = function(grunt) {
    grunt.config('concat', {
        options: {
            banner: '/* <%= grunt.template.today("dd-mm-yyyy") %> */ \n\n',

        },
        all: {
            src: [concat],
            dest: 'src/global/scripts/global.js',
            nonull: true,
        },
    });
};