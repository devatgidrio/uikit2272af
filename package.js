/* jshint strict:false */
/* global Package:true */

Package.describe({
  name: 'gidrdev:uikit2272af',
  version: '2.27.2-af_1',
  // Brief, one-line summary of the package.
  summary: 'UIKit version 2.27.2 Almost Flat Theme from distro',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/gidrdev/uikit2272af',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');
  api.use('jquery', 'client');

  api.addAssets([
    'uikit-2.27.2/fonts/fontawesome-webfont.ttf',
    'uikit-2.27.2/fonts/fontawesome-webfont.woff',
    'uikit-2.27.2/fonts/fontawesome-webfont.woff2',
    'uikit-2.27.2/fonts/FontAwesome.otf',
  ], 'client');

  api.addFiles([
    
    'uikit-2.27.2/css/uikit.almost-flat.css',
    'uikit-2.27.2/css/components/accordion.almost-flat.css',
    'uikit-2.27.2/css/components/autocomplete.almost-flat.css',
    'uikit-2.27.2/css/components/datepicker.almost-flat.css',
    'uikit-2.27.2/css/components/dotnav.almost-flat.css',
    'uikit-2.27.2/css/components/form-advanced.almost-flat.css',
    'uikit-2.27.2/css/components/form-file.almost-flat.css',
    'uikit-2.27.2/css/components/form-password.almost-flat.css',
    'uikit-2.27.2/css/components/form-select.almost-flat.css',
    'uikit-2.27.2/css/components/htmleditor.almost-flat.css',
    'uikit-2.27.2/css/components/nestable.almost-flat.css',
    'uikit-2.27.2/css/components/notify.almost-flat.css',
    'uikit-2.27.2/css/components/placeholder.almost-flat.css',
    'uikit-2.27.2/css/components/progress.almost-flat.css',
    'uikit-2.27.2/css/components/search.almost-flat.css',
    'uikit-2.27.2/css/components/slidenav.almost-flat.css',
    'uikit-2.27.2/css/components/slider.almost-flat.css',
    'uikit-2.27.2/css/components/slideshow.almost-flat.css',
    'uikit-2.27.2/css/components/sortable.almost-flat.css',
    'uikit-2.27.2/css/components/sticky.almost-flat.css',
    'uikit-2.27.2/css/components/tooltip.almost-flat.css',
    'uikit-2.27.2/css/components/upload.almost-flat.css',

    'uikit-2.27.2/js/uikit.js',
    'uikit-2.27.2/js/components/accordion.js',
    'uikit-2.27.2/js/components/autocomplete.js',
    'uikit-2.27.2/js/components/datepicker.js',
    'uikit-2.27.2/js/components/form-password.js',
    'uikit-2.27.2/js/components/form-select.js',
    'uikit-2.27.2/js/components/grid.js',
    'uikit-2.27.2/js/components/htmleditor.js',
    'uikit-2.27.2/js/components/lightbox.js',
    'uikit-2.27.2/js/components/nestable.js',
    'uikit-2.27.2/js/components/notify.js',
    'uikit-2.27.2/js/components/pagination.js',
    'uikit-2.27.2/js/components/parallax.js',
    'uikit-2.27.2/js/components/search.js',
    'uikit-2.27.2/js/components/slider.js',
    'uikit-2.27.2/js/components/slideset.js',
    'uikit-2.27.2/js/components/slideshow.js',
    'uikit-2.27.2/js/components/slideshow-fx.js',
    'uikit-2.27.2/js/components/sortable.js',
    'uikit-2.27.2/js/components/sticky.js',
    'uikit-2.27.2/js/components/timepicker.js',
    'uikit-2.27.2/js/components/tooltip.js',
    'uikit-2.27.2/js/components/upload.js',
  ], 'client');

  //api.export('UIkit', 'client');
});

Package.onTest(function(api) {
  //api.use('tinytest');
  api.use('gidrdev:uikit2272af');
  //api.addFiles('uikit-tests.js');
});