import { useState } from "react"
import styles from './styles.module.css'


export default function Contador({valor, text}) {
  const [numero, setNumero] = useState(valor)
  
   return (
      <div className={styles.contador}>
        {text}: {numero} 
        <br/>
        <button  onClick={() => setNumero(numero + 1)}>
          +
        </button>

        <button  onClick={() => setNumero(numero - 1)}>
          -
        </button>
      </div>
    )
}