import { AppState } from './AppProvider';

type AppActions =
  | { type: 'OPEN'; payload: JSX.Element | null }
  | { type: 'CLOSE'; payload: JSX.Element | null };

export const AppReducer = (state: AppState, action: AppActions): AppState => {
  console.log(state);

  switch (action.type) {
    case 'OPEN':
      return { ...state, open: true, component: action.payload };
    case 'CLOSE':
      return { ...state, open: false, component: action.payload };
    default:
      return state;
  }
};
