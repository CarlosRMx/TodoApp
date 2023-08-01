import React from "react";
import { TodoCounter } from '../components/TodoCounter';
import { TodoList } from '../components/TodoList';
import { TodoSearch } from '../components/TodoSearch';
import { TodoItem } from '../components/TodoItem';
import { CreateTodoButton } from '../components/CreateTodo';
import { TodosLoading } from "../components/TodosLoading";
import { Modal } from "../components/Modal";
import { TodoForm } from "../components/TodoForm";
import { EmptyTodos } from "../components/EmptyTodos";
import { TodoContext } from "../context";

function AppUI (){
  const {
    loading,
    error,
    foundList,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
    return(
      <React.Fragment>

        <TodoCounter/>
  
        <TodoSearch/>

        <TodoList>
              {/* escenarios en los estado de carga */}
              {loading && <TodosLoading/>}

              {error && <p>Hubo un error con los datos</p>}
              
              {(!loading && foundList.length === 0) && <EmptyTodos/> }

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

        {openModal && (
          <Modal>
            <TodoForm/>
          </Modal>
        )}        

      </React.Fragment>
    );
}

export {AppUI};