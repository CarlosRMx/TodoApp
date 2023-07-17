import './todoItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckDouble,faCircleXmark, faColonSign } from '@fortawesome/free-solid-svg-icons'

function TodoItem({name,status: isCompleted}){
    return(
      <li className={`taskCard ${isCompleted && 'taskCard--completed'}`}>
        <FontAwesomeIcon 
          className={`icon icon__check ${isCompleted && 'icon__check--completed'}`}  
          icon={faCheckDouble} 
          onClick={(event)=>{
            console.log(event);
            console.log('estoy haciendo click para completar todos')
          }}
        />
        <p className={`nameTask ${isCompleted && 'nameTask--completed'}`}>{name}</p>
        <FontAwesomeIcon className='icon icon__close' icon={faCircleXmark}/>
      </li>
    );
}


export {TodoItem};