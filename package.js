Package.describe({
  name: 'cscottnet:random-name',
  summary: 'Generate random (or seeded) names server-side',
  version: '1.0.1_1',
  git: 'https://github.com/cscott/meteor-random-name'
});

Npm.depends({"node-random-name": "1.0.1"});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('random-name.js', 'server');
  api.addFiles('random-name-client.js', 'client');
  if (api.export) { api.export('RandomName'); }
});

Package.onTest(function(api) {
  api.use(['tinytest','underscore','cscottnet:random-name']);
  api.addFiles('random-name-tests.js', 'server');
});
