import React from 'react';
import './todoSearch.css';
import { TodoContext } from '../../context';

function TodoSearch() {
  //haciendo uso del contexto para poder comunicar las props
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext);
  return (
    <div className='inputContainer'>
      <input 
          className='inputContainer__field' 
          placeholder='🔍 Search...'
          value={searchValue}
          onChange={(event)=>{
            // console.log(event.target);//apunta al elemento
            // console.log(event.target.value);//obtiene el valor del input
            setSearchValue(event.target.value);
          }}
        >
      </input>
    </div>
  );
}

export  {TodoSearch};