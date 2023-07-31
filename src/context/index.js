import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";


const TodoContext = React.createContext();

function TodoProvider({children}){

  //haciendo uso de un custom hook
  const {
    item: todos, 
    save_State_LocalStorage: saveTodos,
    loading,
    error,
  } = useLocalStorage('TODOS_V1',[]) ;

   // los estados pueden ser comunicados de padre a hijos mediante props 
   const [searchValue, setSearchValue]= React.useState('');
    //estado para el manejo del modal que tiene el formulario
   const [openModal, setOpenModal] = React.useState(false);

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

  const addTodo = (name) =>{
    const arrayCopy = [...todos];
    arrayCopy.push({
      name,
      status:false,
    });
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

    return(
        <TodoContext.Provider value={{
            completedTodo,
            totalTodos,
            searchValue,
            setSearchValue,
            foundList,
            completeTodo,
            deleteTodo,
            loading,
            error,
            openModal,
            setOpenModal,
            addTodo,
        }}
        >
            {children}
        </TodoContext.Provider>

    );
}
export {TodoContext, TodoProvider}

