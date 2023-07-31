import React from "react";
import './todoForm.css';
import { TodoContext } from "../../context";


function TodoForm() {
    
    const {
        addTodo,
        setOpenModal,
    }= React.useContext(TodoContext);

    //estado local para el valor que se recibe 
    const [newTodoValue, setNewTodoValue] = React.useState('');


    const onSubmit =(event)=>{
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }
    
    const onCancel = ()=>{
        setOpenModal(false);
    }

    const onChange = (event) =>{
       setNewTodoValue(event.target.value);
    }
  return (
    <div>
        <form 
            className="form"
            onSubmit={onSubmit}
        >
            <label>Escribe una nueva tarea</label>

            <textarea 
                placeholder="Tomar el examen de Reac.js ..."
                value={newTodoValue}
                onChange={onChange}
            >
            </textarea>

            <div className="form__commands">
                <button 
                    className="form__button form__button--add" 
                    type="submit"
                >Agregar</button>
                <button 
                    className="form__button form__button--cancel" 
                    type="button"
                    onClick={onCancel}
                >Cancelar</button>
            </div>
        </form>
    </div>
  )
}

export {TodoForm}