import './App.css';
import ListaCursos from './componenets/ListaCursos/ListaCursos';
import Contador from './componenets/MeuComponente/Contador';

function App() {

  const valorInicial = 5;
  const content = 'Numero escolhido'

  return (
    <>
      <Contador valor={valorInicial} text={content} />
      <hr />
      <hr />
      <ListaCursos />

    </>
  );
}

export default App;
