const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
	.js('resources/js/script.js', 'public/js')
    .copy('node_modules/bootstrap/dist/css/bootstrap.min.css', 'public/css/bootstrap.min.css')
    .copy('node_modules/bootstrap/dist/js/bootstrap.bundle.js', 'public/js/bootstrap.bundle.js')
    .copy('resources/img/', 'public/img');

mix.sass('resources/sass/app.scss', 'public/css')
	.options({
        processCssUrls: false
    });