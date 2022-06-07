import Counter from './components/Counter';
import { AppProvider } from './context/AppProvider';


function App() {
  return (
    <div className="App">
      <AppProvider>
        <Counter />
        </AppProvider>
    </div>
  );
}

export default App;
