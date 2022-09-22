import { useEffect } from 'react';
import './App.css';
import useOnlineStatus from './data/hooks/useOnlineStatus';

function App() {
  const isOnline = useOnlineStatus()

  useEffect(() => {
    if (!isOnline) {
      alert("Sua Conexão caiu")
    }
  }, [isOnline])

  return (
    <div>
      {isOnline ? 'disponivel' : 'off'}
    </div>
  );
}

export default App;
