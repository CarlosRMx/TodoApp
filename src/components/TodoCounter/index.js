import React from 'react';
import './todoCounter.css';
import { TodoContext } from '../../context';

function TodoCounter() {
  //pasando componentes por medio del useContext en lugar de props
  const {
    completedTodo,
    totalTodos,
  } = React.useContext(TodoContext);

  return (
    completedTodo === totalTodos?
    //para insertar codigo js dentro jsx usamos {}
      <div className='tittle'>
        <h1>Has completado todas tus tareas ✅</h1>
      </div>
    :
      <div className='tittle'>
        <h1>Has completado {completedTodo} de {totalTodos} TODOS</h1>
      </div>
  );
}
// export nombrado
export {TodoCounter};