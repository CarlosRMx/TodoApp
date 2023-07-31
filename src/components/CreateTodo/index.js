import React from 'react';
import './createTodo.css';
import { TodoContext } from '../../context';

function CreateTodoButton() {
  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext)
  return (
    <button 
      className="createButton"
      openModal={openModal}
      onClick={() => {
        setOpenModal(state => !state)
      }}
    >+
    </button>
  )
}

export {CreateTodoButton};