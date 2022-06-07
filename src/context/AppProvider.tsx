import { useReducer } from 'react';
import { AppContext } from './AppContext';
import { AppReducer } from './AppReducer';


export const initialState: AppState = {
  open: false,
  count: 1,
};
export interface AppState {
  open: boolean;
  count: number;
  payload?: number;
}

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
    console.log(state);
    const toggleModalOpen = () => {
        dispatch({type: 'OPEN'})
    }
  return (
    <AppContext.Provider value={{ state, toggleModalOpen }}>{children}</AppContext.Provider>
  );
};
