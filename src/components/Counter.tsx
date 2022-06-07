import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { AppProvider } from '../context/AppProvider';

const Counter = () => {
  const { toggleModalOpen } = useContext(AppContext);
  console.log(toggleModalOpen);

  return (
    <AppProvider>
      <button>button</button>
    </AppProvider>
  );
};

export default Counter;
