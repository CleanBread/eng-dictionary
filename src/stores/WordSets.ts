import { types } from 'mobx-state-tree';

export const WordSetsItem = types.model({
  id: types.number,
  wordCount: types.number,
  name: types.string,
  img: types.string,
});

export const WordSets = types
  .model({
    items: types.optional(types.array(WordSetsItem), []),
  })
  .actions((self) => ({
    addItems(items) {
      self.items = items;
    },
  }));
