import './todoList.css'
function TodoList({children}) {
  return (
    <div className='mainContainer'>
      <ul className="mainContainer__tasks">
          {children}
      </ul>
    </div>
  )
}

export {TodoList};