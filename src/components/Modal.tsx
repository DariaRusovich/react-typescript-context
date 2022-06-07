import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Header from './Header';


const Modal = () => {
  const { toggleModalOpen } = useContext(AppContext);

  const openModal = () => {
    toggleModalOpen(<Header/>)
  }

  return (
      <button onClick={openModal}>button</button>
    
  );
};

export default Modal;
