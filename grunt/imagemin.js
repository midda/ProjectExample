module.exports = function(grunt) {
    grunt.config('imagemin', {
        prod: {
            options: {
            	// .png compression
                optimizationLevel: 7,
                // .gif compression
                interlaced: true,
                // .jpg compression
                progressive: true,
                // .svg compresion
                svgoPlugins: [{
                    removeViewBox: false
                }],
            },
            files: [{
                expand: true,
                cwd: 'src/',
                src: ['global/img/**/*.{png,jpg,gif,svg}'],
                dest: 'dist/'
            }]
        }
    });
};