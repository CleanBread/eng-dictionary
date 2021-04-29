import { types } from 'mobx-state-tree';

export const User = types
  .model({
    name: types.optional(types.string, ''),
    email: types.optional(types.string, ''),
    token: types.optional(types.string, ''),
    isLogin: types.optional(types.boolean, false),
  })
  .actions((self) => {
    const updateName = (name) => {
      self.name = name;
    };

    const logout = () => {
      self.email = '';
      self.name = '';
      self.token = '';
      self.isLogin = false;
    };

    return {
      updateName,
      logout,
    };
  });
