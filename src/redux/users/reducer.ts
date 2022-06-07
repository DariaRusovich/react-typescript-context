import { userActionType } from './actionTypes';
import { UserAction, IUserState } from '../../types/users';

const initialState: IUserState = {
  data: [],
  loading: false,
  error: null,
};

export const usersReducer = (
  state = initialState,
  action: UserAction
): IUserState => {
  switch (action.type) {
    case userActionType.SET_USERS: {
      return { ...state, data: action.payload };
    }
    case userActionType.FETCH_START: {
      return { ...state, loading: true, error: null };
    }
    case userActionType.FETCH_END: {
      return { ...state, loading: false };
    }
    case userActionType.SET_ERROR: {
      return { ...state, data: [], error: action.payload };
    }
    default:
      return state;
  }
};
