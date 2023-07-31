import React from "react";

function useLocalStorage(itemName, initialValue) {

    const [item,setItem] = React.useState(initialValue);
    //estado de carga y error para la aplicacion
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
    
    //creando efectos en React 
    React.useEffect(()=>{

      setTimeout(() => {
        try {
          const getItemLocalStorage = localStorage.getItem(itemName);
          let parsedItem;
  
          if(!getItemLocalStorage){
            localStorage.getItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
        
          }else{
            parsedItem =  JSON.parse(getItemLocalStorage); 
            setItem(parsedItem);
          }
  
          //actualizando el estado de carga 
          setLoading(false);
  
        } catch (error) {
          setLoading(false);
          setError(true);
        }
      }, 2000);

    },[]);
    
  
    const save_State_LocalStorage = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
    }
  
    //retornar los valores que seran utiles 
  
    return {
      item, 
      save_State_LocalStorage,
      loading,
      error,
    }
}

export {useLocalStorage};

//haciendo render a partir de arrays
// const defaulTodos=[
//   {name:'Cortar cebolla',status:false},
//   {name:'Tomar el curso de introduccion a React.js',status:false},
//   {name:'Comprar comida',status:false},
//   {name:'Llamar al banco',status:false},
//   {name: 'Aprender estado derivados', status:false}
// ];

//haciendo uso de localStorage

// localStorage.setItem('TODOS_V1', JSON.stringify(defaulTodos));// insertar 
// localStorage.getItem('TODOS_v1');//sacar del storage
// localStorage.removeItem('TODOS_v1');// elminar un elemento del storage