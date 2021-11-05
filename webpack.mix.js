const mix = require('laravel-mix');

mix
  .ts('resources/js/app.js', 'public/js')
  .postCss('resources/css/app.css', 'public/css', [
    //
  ]);
