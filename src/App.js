import './App.css';
import Contador from './componenets/MeuComponente/Contador';

function App() {
  const valorInicial = 5;
  const content = 'Numero escolhido'

  return (
    <Contador valor={valorInicial} text={content} />
  );
}

export default App;
