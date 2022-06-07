import Modal from './components/Modal';
import { AppProvider } from './context/AppProvider';

function App() {
  return (
    <div className="App">
      <AppProvider>
        <Modal />
      </AppProvider>
    </div>
  );
}

export default App;
