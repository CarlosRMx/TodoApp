import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodo';

function AppUI ({
    completedTodo,
    totalTodos,
    searchValue,
    setSearchValue,
    foundList,
    completeTodo,
    deleteTodo,
    loading,
    error,

}){
    return(
        <React.Fragment>

        <TodoCounter 
          completed={completedTodo} 
          total={totalTodos}
        />
  
        <TodoSearch 
          searchValue = {searchValue}
          setSearchValue = {setSearchValue}
        />
  
        <TodoList>
          {/* escenarios en los estado de carga */}
          {loading && <p>Estamos cargando...</p>}
          {error && <p>Hubo un error con los datos</p>}
          {!loading && foundList.lenght === 0 && <p>Crea tu primer Todo</p> }

          {foundList.map(todo =>
            //cada elemento que se renderiza debe tener una key como identificador unico
            <TodoItem 
              key = {todo.name} 
              name = {todo.name} 
              status = {todo.status}
              onCompleted = {()=> completeTodo(todo.name)}
              onDeleted = {()=> deleteTodo(todo.name)}
            />
          )}
        
        </TodoList>
  
        <CreateTodoButton/>
      </React.Fragment>
    );
}

export {AppUI};