import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AppProvider } from '../context/AppProvider';
import Header from './Header';
import ModalWindow from './ModalWindow';


const Counter = () => {
  const { state, toggleModalOpen } = useContext(AppContext);

  const openModal = () => {
    toggleModalOpen(<Header/>)
  }

  return (
    
      <button onClick={openModal}>button</button>
    
  );
};

export default Counter;
