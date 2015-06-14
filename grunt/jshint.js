var jshint = [
	// Global components
    'src/global/components/**/*.js',

    // Third party plugins - custom scripts only
    'src/global/third-party-plugins/**/*.custom.js',
    '!src/**/*.min.js'
];

module.exports = function(grunt) {
    grunt.config('jshint', {
        options: {
            reporter: require('jshint-stylish')
        },
        src: [jshint]
    });
};