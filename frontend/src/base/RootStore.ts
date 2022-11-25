import { UserStore } from '../modules/user/UserStore';
import { createContext, useContext } from 'react';
import { ExampleStore } from '../modules/example/ExampleStore';

class RootStore {
  exampleStore: ExampleStore;
  userStore: UserStore;

  constructor() {
    this.exampleStore = new ExampleStore();
    this.userStore = new UserStore();
  }

  sync = async () => {
    await Promise.all(
      Object.values(this).map(store => {
        return store?.sync ? store?.sync() : Promise.resolve();
      }),
    );
  };
}

export const rootStore = new RootStore();

export const storesContext = createContext(rootStore);

export const useRootStore = () => useContext(storesContext);
