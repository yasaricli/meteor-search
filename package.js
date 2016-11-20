Package.describe( {
  name: 'yasaricli:search',
  summary: 'Search the Mongo Collection using Fuse.',
  version: '0.0.1',
  git: "https://github.com/yasaricli/meteor-search.git",
  documentation: "README.md"
});

Package.onUse((api) => {
  api.versionsFrom('1.4.2');
  api.use("ecmascript");
  api.mainModule('search.js', 'server');
});
