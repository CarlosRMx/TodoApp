import { TodoCounter } from './components/TodoCounter/TodoCounter';
import { TodoList } from './components/TodoList/TodoList';
import { TodoSearch } from './components/TodoSearch/TodoSearch';
import { TodoItem } from './components/TodoItem/TodoItem';
import { CreateTodoButton } from './components/CreateTodo/CreateTodo';
import React from 'react';

//haciendo render a partir de arrays
const defaulTodos=[
  {name:'Cortar cebolla',status:false},
  {name:'Tomar el curso de introduccion a React.js',status:false},
  {name:'Comprar comida',status:false},
  {name:'Llamar al banco',status:false},
  {name: 'Aprender estado derivados', status:false}
];
function App() {
  // los estados pueden ser comunicados de padre a hijos mediante props 
  const [searchValue, setSearchValue]= React.useState('');

  const [todos,setTodos]= React.useState(defaulTodos);

  //los estados derivados son aquellos en los que podemos hacer calculos 
  const completedTodo = todos.filter(todo => todo.status === true).length;
  const totalTodos = todos.length;

  const foundList = todos.filter(todo =>{
    const todoName = todo.name.toLocaleLowerCase();
    const inputValue = searchValue.toLocaleLowerCase();

    return todoName.includes(inputValue);
  });


  return (
    <React.Fragment>

      <TodoCounter completed={completedTodo} total={totalTodos}/>

      <TodoSearch 
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <TodoList>
        {foundList.map(todo =>
          //cada elemento que se renderiza debe tener una key como identificador unico
          <TodoItem key={todo.name} name={todo.name} status={todo.status}/>
        )}
      
      </TodoList>

      <CreateTodoButton/>
    </React.Fragment>
  );
}


export default App;
