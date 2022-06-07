import { AppState } from './AppProvider';

type AppActions = { type: 'OPEN' } | { type: 'COUNT'; payload: number };

export const AppReducer = (state: AppState, action: AppActions): AppState => {
    console.log(state);
    
  switch (action.type) {
    case 'OPEN':
      return { ...state, open: true };

    case 'COUNT':
      return { ...state, payload: action.payload };

    default:
      return state;
  }
};
