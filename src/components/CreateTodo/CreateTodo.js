import './createTodo.css';

function CreateTodoButton() {
  return (
    <button 
      className="createButton"
      onClick={()=>{
        console.log('estoy dando click en el boton crear');
      }}
    >+
    </button>
  )
}

export {CreateTodoButton};