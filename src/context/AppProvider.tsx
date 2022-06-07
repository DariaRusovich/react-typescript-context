import { useReducer } from 'react';
import ModalWindow from '../components/ModalWindow';
import { AppContext } from './AppContext';
import { AppReducer } from './AppReducer';

export const initialState: AppState = {
  open: false,
  component: null,
};

export interface AppState {
  open: boolean;
  component: JSX.Element | null;
}

interface AppProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { component } = state;
  console.log(state);

  const toggleModalOpen = (component: JSX.Element | null) => {
   dispatch({ type: 'OPEN', payload: component });
  };

  const toggleModalClose = () => {
    dispatch({ type: 'CLOSE', payload: null });
  }
  return (
    <AppContext.Provider value={{ state, toggleModalOpen, toggleModalClose }}>
      <ModalWindow
        component={component}
      ></ModalWindow>
      {children}
    </AppContext.Provider>
  );
};
