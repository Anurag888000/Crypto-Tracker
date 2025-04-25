import CryptoTable from './components/CryptoTable';
import useFakeWebSocket from './hooks/useFakeWebSocket';

function App() {
  useFakeWebSocket();

  return (
    <div className="app">

      <CryptoTable />
    </div>
  );
}

export default App;