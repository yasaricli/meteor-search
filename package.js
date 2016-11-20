Package.describe( {
  name: 'yasaricli:search',
  summary: 'Search the Mongo Collection using Fuse.',
  version: '0.0.1'
});

Package.onUse((api) => {
  api.use("ecmascript");
  api.mainModule('search.js', 'server');
});
