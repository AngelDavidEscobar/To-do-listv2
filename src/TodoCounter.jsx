 import './TodoCounter.css'
 
 function TodoCounter({total, completed}) {
   if(total == completed){
      return(
      <h1>No tienes ningún pendiente :3
       </h1>
       )
   }
    return (
  
       <h1>Has completado {completed} de {total} Todos
       </h1>
    )}


export { TodoCounter }