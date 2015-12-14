// package metadata file for AtmosphereJS
'use strict';

var packageName = 'formly:angular-formly-templates-material';
var packageJson = JSON.parse(Npm.require("fs").readFileSync('package.json'));

Package.describe({
  name: packageName,
  summary: '(official): Material design templates for angular-formly',
  version: packageJson.version,
  documentation: 'README.md',
  git: 'https://github.com/formly-js/angular-formly-templates-material.git'
});

Package.onUse(function (api) {
  var packages = {
      use: [
          'angular@1.0.0',
          'angular:angular-messages@1.4.7',
          'angular:angular-material@0.11.4',
          'wieldo:angular-formly@7.3.2'
      ],
      imply: [
          'angular:angular@1.4.7',
          'angular:angular-messages',
          'angular:angular-material',
          'wieldo:angular-formly'
      ]
  };

  api.versionsFrom(['METEOR@1.0']);

  api.use(packages.use);
  api.imply(packages.imply);

  api.addFiles([
    'dist/formly-material.js'
  ], 'client');
});
