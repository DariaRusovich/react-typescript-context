import axios from 'axios';
import { Dispatch } from 'react';
import { UserAction } from '../../types/users';
import { userActionType } from './actionTypes';

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: userActionType.FETCH_START });
      const response = await axios.get(
        'https://jsonplaceholder.typicode.com/users'
      );
      
      dispatch({ type: userActionType.SET_USERS, payload: response.data });
    } catch (error) {
      dispatch({ type: userActionType.SET_ERROR, payload: 'Error!' });
    }
    dispatch({ type: userActionType.FETCH_END });
 };
 };

//function setUsers(users: any) {
//   return { type: userActionType.SET_USERS, payload: users };
// }
// function start() {
//   return { type: userActionType.FETCH_START };
// }
// function end() {
//   return { type: userActionType.FETCH_END };
// }
// function setError(error: any) {
//     return {type: userActionType.SET_ERROR, payload: error}
// }
