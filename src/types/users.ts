import { userActionType } from "../redux/users/actionTypes";

export interface ISetUsers {
    type: userActionType.SET_USERS;
    payload: any[];
  }
  export interface ISetError {
    type: userActionType.SET_ERROR;
    payload: string;
  }
  export interface IFetchStart {
    type: userActionType.FETCH_START;
  }
  export interface IFetchEnd {
    type: userActionType.FETCH_END;
  }
  
  export type UserAction = ISetUsers | ISetError | IFetchStart | IFetchEnd;
  
  export interface IUserState {
    data: any[];
    loading: boolean;
    error: null | string;
  }