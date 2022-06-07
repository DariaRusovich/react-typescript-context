import { RootState } from '../store';

export function usersSelector(state: RootState) {
  return state.users;
}
