import React, { useState } from 'react'
import styled from 'styled-components'


function Comentarios() {

const [novaTarefa, atualizaNovaTarefa] = useState("")
const [tarefas, atualizaTarefas] = useState(["comprar pao"])

  const lidaComMudancaTarefa = (event) => {
      atualizaNovaTarefa(event.target.value);
  }

  const lidaComCriarTarefa = () => {
    const novasTarefas = [...tarefas, novaTarefa];

    atualizaTarefas(novasTarefas);
    atualizaNovaTarefa("")
   }

  return(
      <div >
        <input
        placeholder="Nova tarefa"
        onChange={lidaComMudancaTarefa}
        value={novaTarefa}
        />

      <button onClick={lidaComCriarTarefa} >Criar Tarefa</button>

   
      <hr/>
  
      <h3>Tarefas:</h3>

        <ul >
         {tarefas.map(tarefa => {
           return  <li>{tarefa}</li>;
        })}
       </ul>

      </div>
  );

}  
export default Comentarios

