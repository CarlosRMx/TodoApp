import './todoCounter.css';
function TodoCounter({completed, total}) {
  return (
    //para insertar codigo js dentro jsx usamos {}
    <div className='tittle'>
      <h1>Has completado {completed} de {total} TODOS</h1>
    </div>
  );
}
// export nombrado
export {TodoCounter};