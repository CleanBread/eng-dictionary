import { types } from 'mobx-state-tree';

export const User = types
  .model({
    name: types.string,
    email: types.string,
    token: types.string,
  })
  .actions((self) => ({
    updateName(name) {
      self.name = name;
    },
  }));
