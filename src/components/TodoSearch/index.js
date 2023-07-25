import React from 'react';
import './todoSearch.css';


function TodoSearch({searchValue,setSearchValue}) {
  // //estado en react 
  // // searchValue es el estado 
  // // setSearchValue es la funcion actualizadora del estado
  // // React.state es una funcion dentro de parentesis se define el estado inicial
  // const [searchValue, setSearchValue] = React.useState('');

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