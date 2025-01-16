import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodosLoading } from '../TodosLoading/index';
import { EmptyTodos } from '../EmptyTodos/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodoContext } from '../TodoContext';
import { useContext } from 'react';
import { Modal } from '../Modal';
import {TodoForm} from '../TodoForm/index'

function AppUI() {
  const {
    loading,
    error,
    todosFiltro,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal
  } = useContext(TodoContext)
    return (
        <>
        <TodoCounter />
        <TodoSearch/>
     
          <TodoList>
            {loading && <TodosLoading />}
            {error && <p>Hubo un error cargando los datos</p>}
            {(!loading && todosFiltro.length ==
              0) && <EmptyTodos />}
          
            
            {todosFiltro.map(todo => (
              <TodoItem 
              key={todo.text}
              text={todo.text} 
              completed={todo.completed}
              onComplete={()=>completeTodo(todo.text)}
              onDelete={()=>deleteTodo(todo.text)}
              />
            ))
            
          }
          </TodoList>
       
        <CreateTodoButton 
        setOpenModal={setOpenModal}/>
        
        {openModal && (
          <Modal>
          <TodoForm />
        </Modal>
        )}
       
        </>
      )
    }
    
export { AppUI };