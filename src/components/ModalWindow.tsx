import { FC, useContext } from 'react';
import { AppContext } from '../context/AppContext';

interface ModalWindow {
  component: JSX.Element | null
}

const ModalWindow: FC<ModalWindow> = ({component, children}) => {
  const { state, toggleModalClose  } = useContext(AppContext);
  const { open  } = state;

  const closeModal = () => {
    toggleModalClose()
  }
  return (
    <div className={`modal-window ${open ? 'active' : ''}`}>
      <div className="modal-window__content">
        <button onClick={closeModal} className="modal-close__btn">&#10006;</button>
        {component}
        {children}
      </div>
    </div>
  );
};

export default ModalWindow;
