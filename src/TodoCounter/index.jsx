 import { useContext } from 'react'
import './TodoCounter.css'
import { TodoContext } from '../TodoContext'
 
 function TodoCounter() {
   const {
      completedTodos,
      totalTodos
   }= useContext(TodoContext)


    return (
      <>
        {completedTodos === totalTodos ? (
          <h1>No tienes To-dos por hacer</h1>
        ) : (
          <h1>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> To-dos
          </h1>
        )}
      </>
      );
    }


export { TodoCounter }