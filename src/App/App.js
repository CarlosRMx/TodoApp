import React from 'react';
import { AppUI } from './AppUI';
import {useLocalStorage} from '../App/useLocalStorage'

//haciendo render a partir de arrays
// const defaulTodos=[
//   {name:'Cortar cebolla',status:false},
//   {name:'Tomar el curso de introduccion a React.js',status:false},
//   {name:'Comprar comida',status:false},
//   {name:'Llamar al banco',status:false},
//   {name: 'Aprender estado derivados', status:false}
// ];

//haciendo uso de localStorage

// localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos));// insertar 
// localStorage.getItem('TODOS_v1');//sacar del storage
// localStorage.removeItem('TODOS_v1');// elminar un elemento del storage

function App() {

  // los estados pueden ser comunicados de padre a hijos mediante props 
  const [searchValue, setSearchValue]= React.useState('');

  //haciendo uso de un custom hook
  const {
    item: todos, 
    save_State_LocalStorage: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]) ;

  //los estados derivados son aquellos en los que podemos hacer calculos 
  const completedTodo = todos.filter(todo => todo.status === true).length;
  const totalTodos = todos.length;

  const foundList = todos.filter(todo =>{
    const todoName = todo.name.toLocaleLowerCase();
    const inputValue = searchValue.toLocaleLowerCase();

    return todoName.includes(inputValue);
  });

  const completeTodo = (searchedTodo) =>{

    const arrayCopy = [...todos];
    const todoIndex =  arrayCopy.findIndex( todo =>{
      return todo.name === searchedTodo
    });
    arrayCopy[todoIndex].status = true;

    saveTodos(arrayCopy);
  }

  const deleteTodo = (searchedTodo) => {
    
    const arrayCopy = [...todos];
    const todoIndex = arrayCopy.findIndex(todo => {
      return todo.name === searchedTodo
    });
    arrayCopy.splice(todoIndex,1);

    saveTodos(arrayCopy);
  }

  

  return (
    <AppUI
        completedTodo={completedTodo}
        totalTodos={totalTodos}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        foundList={foundList}
        completeTodo={completeTodo}
        deleteTodo={deleteTodo}
        loading={loading}
        error={error}
    />
  );
}


export default App;
