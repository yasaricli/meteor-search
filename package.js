Package.describe( {
  name: 'yasaricli:search',
  summary: 'Search the Mongo Collection using Fuse.',
  version: '0.0.2',
  git: "https://github.com/yasaricli/meteor-search.git",
  documentation: "README.md"
});

Package.onUse((api) => {
  api.versionsFrom('1.4.2');
  api.use("ecmascript");

  // server and client
  api.mainModule('search.js');
});
