import { UserModel } from './types/UserTypes';
import { makeAutoObservable } from 'mobx';

export class UserStore {
  loading = false;

  userUid: string | null = null;
  userInfo: UserModel | null = null;

  nothingVisible: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading = (value: boolean) => {
    this.loading = value;
  };

  setNothingVisible = (value: boolean) => {
    this.nothingVisible = value;
  };

  setUserUid = (value: string | null) => {
    this.userUid = value;
  };

  setUserInfo = (value: UserModel | null) => {
    this.userInfo = value;
  };

  resetStore = () => {
    this.setUserUid(null);
    this.setUserInfo(null);
  };
}
