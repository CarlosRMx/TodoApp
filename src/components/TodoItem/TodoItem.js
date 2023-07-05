import './todoItem.css'

function TodoItem({name,status}){
    return(
      <li className="taskCard">
        <span>V</span>
        <p>{name}</p>
        <span>X</span>
      </li>
    );
}


export {TodoItem};