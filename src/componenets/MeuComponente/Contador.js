import { useState } from "react"
import styles from './styles.module.css'


export default function Contador() {
  const [numero, setNumero] = useState(0)
  
   return (
      <div className={styles.contador}>
        Numero: {numero} 
        <br/>
        <button  onClick={() => setNumero(numero + 1)}>
          +
        </button>
      </div>
    )
}