import './todoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble,faCircleXmark} from '@fortawesome/free-solid-svg-icons'

function TodoItem({name,status: isCompleted,onCompleted,onDeleted}){
    return(
      <li className={`taskCard ${isCompleted && 'taskCard--completed'}`}>
        <FontAwesomeIcon 
          className={`icon icon__check ${isCompleted && 'icon__check--completed'}`}  
          icon={faCheckDouble} 
          onClick={onCompleted}
        />
        <p className={`nameTask ${isCompleted && 'nameTask--completed'}`}>{name}</p>
        <FontAwesomeIcon 
          className='icon icon__close' 
          icon={faCircleXmark}
          onClick={onDeleted}
        />
      </li>
    );
}


export {TodoItem};