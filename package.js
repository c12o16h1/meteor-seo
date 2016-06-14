Npm.depends({
  'meteor-mean-seo': '0.0.4'
});
Package.describe({
  name: 'meteor-mean-seo',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('webapp', 'server');
  api.use('ecmascript');
  api.mainModule('meteor-mean-seo.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('meteor-mean-seo');
  api.mainModule('meteor-mean-seo-tests.js');
});
