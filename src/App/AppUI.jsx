import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { TodosLoading } from '../TodosLoading/index';
import { EmptyTodos } from '../EmptyTodos/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { TodoContext } from '../TodoContext';

function AppUI() {
    return (
        <>
        <TodoCounter />
        <TodoSearch/>
    
        <TodoContext.Consumer>
          {({
            loading,
            error,
            todosFiltro,
            completeTodo,
            deleteTodo
          }) =>(
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
          )}
     
        </TodoContext.Consumer>

        <CreateTodoButton />
    
       
        </>
      )
    }
    
export { AppUI };