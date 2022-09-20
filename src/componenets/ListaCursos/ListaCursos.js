import { useState } from "react";
import { ApiService } from "../../data/services/ApiService";


function ListaCursos() {
  const [cursos, setCursos] = useState([])

  function buscarCursos(){
      ApiService.get('cursos')
        .then(data => setCursos(data))
  }

  console.log(cursos)

  return ( 
    <div>
      <button onClick={buscarCursos}>
        Procurar Cursos
      </button>
      <br/>

        <ul>
          {cursos.map((i) => {
            return (
              <li  key={i.id}>{i.nome} = {i.horas}</li>
            )
          })}
        </ul>

    </div>
   );
}

export default ListaCursos;