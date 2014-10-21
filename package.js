Package.describe({
  summary: "Base64 (en/de)coding for CryptoJS, standard secure crypto algorithms",
  version: "3.1.2_1",
  git: "https://github.com/tanis2000/meteor-crypto-base64.git"
});

Package.on_use(function (api, where) {
	api.versionsFrom('METEOR@0.9.1.1');
  api.use('crypto-base', ['client', 'server']);
  api.use('underscore', ['client', 'server']);
  api.imply('crypto-base', ['client', 'server']);
  api.add_files('enc-base64.js', ['client', 'server']);
});

Package.on_test(function (api) {
  api.use(['crypto-base', 'crypto-base64', 'tinytest']);

  api.add_files('crypto-base64_tests.js', ['client', 'server']);
});
