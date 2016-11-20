# meteor-search
Search the Mongo Collection using Fuse.

## Usage

```javascript

import { Search } from 'meteor/yasaricli:search';

const Books = new Mongo.Collection('books');

const cursor = new Search(Books, { 
  keys: ["title", "author.firstName"]
});

cursor.search('Old Man'); // return [] list.
```
