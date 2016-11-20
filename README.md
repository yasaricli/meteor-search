# meteor-search
Search the Mongo Collection using Fuse.

## Usage

    meteor add yasaricli:search

```javascript

import { Search } from 'meteor/yasaricli:search';

const Books = new Mongo.Collection('books');

const cursor = new Search(Books, { 
  keys: ["title", "author.firstName"]
});

cursor.search('Old Man'); // return [] list.
```

### Options


**keys** (*type*: `Array`)

List of properties that will be searched.


**caseSensitive** (*type*: `Boolean`, *default*: `false`)

Indicates whether comparisons should be case sensitive.

**threshold** (*type*: `Decimal`, *default*: `0.6`)

At what point does the match algorithm give up. A threshold of `0.0` requires a perfect match (of both letters and location), a threshold of `1.0` would match anything.


**distance** (*type*: `Integer`, *default*: `100`)

Determines how close the match must be to the fuzzy location (specified by `location`). An exact letter match which is `distance` characters away from the fuzzy location would score as a complete mismatch. A `distance` of `0` requires the match be at the exact `location` specified, a `distance` of `1000` would require a perfect match to be within 800 characters of the `location` to be found using a `threshold` of `0.8`.

**maxPatternLength** (*type*: `Integer`, *default*: `32`)

The maximum length of the pattern. The longer the pattern, the more intensive the search operation will be.  Whenever the pattern exceeds the `maxPatternLength`, an error will be thrown.  Why is this important? Read [this](http://en.wikipedia.org/wiki/Word_(computer_architecture)#Word_size_choice)


**verbose** (*type*: `Boolean`, *default*: `false`)

Will print to the console. Useful for debugging.


**tokenize** (*type*: `Boolean`, *default*: `false`)

When true, the search algorithm will search individual words **and** the full string, computing the final score as a function of both. Note that when `tokenize` is `true`, the `threshold`, `distance`, and `location` are inconsequential for individual tokens.


**tokenSeparator** (*type*: `Regex`, *default*: `/ +/g`)

Regex used to separate words when searching. Only applicable when `tokenize` is `true`.


**matchAllTokens** (*type*: `Boolean`, *default*: `false`)

When `true`, the result set will only include records that match all tokens. Will only work if `tokenize` is also true.


-----
**Thanks** [Fuse](http://fusejs.io/)
