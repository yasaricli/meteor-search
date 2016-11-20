import { Fuse } from './lib/fuse';

export class Search {
  constructor(collection, options = {}) {
    if (_.isUndefined(collection)) {
      throw new Meteor.Error('Undefined Collection', 'It needs to be a collection.');
    }

    // fetch collection
    this._fetch = collection.find(options.find || {}).fetch();

    // initialize cursor
    this.cursor = new Fuse(this._fetch, options);
  }

  search(q) {
    return this.cursor.search(q);
  }
}
