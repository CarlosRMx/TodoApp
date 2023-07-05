import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodo/CreateTodo';
import React from 'react';

//haciendo render a partir de arrays
const defaulTodos=[
  {name:'Cortar cebolla',status:true},
  {name:'Tomar el curso de introduccion a React.js',status:false},
  {name:'Comprar comida',status:true},
  {name:'Llamar al banco',status:false},
];
function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={4} total={10}/>
      <TodoSearch/>

      <TodoList>
        {defaulTodos.map(todo =>
          //cada elemento que se renderiza debe tener una key como identificador unico
          <TodoItem key={todo.name} name={todo.name}/>
        )}
      
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
