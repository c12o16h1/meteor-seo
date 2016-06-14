Npm.depends({
  'meteor-mean-seo': '0.0.4'
});
Package.describe({
  name: 'c12o16h1:meteor-seo',
  version: '0.0.4',
  // Brief, one-line summary of the package.
  summary: 'SEO for JS apps on over Meteor (Meteor, Angular, React, whatever)',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/c12o16h1/meteor-seo',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use('webapp', 'server');
  api.use('ecmascript');
  api.mainModule('meteor-seo.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('c12o16h1:meteor-seo');
  api.mainModule('meteor-seo-tests.js');
});
