import React from 'react'
import './App.css';
import { TodoCounter } from '../TodoCounter/index';
import { TodoSearch } from '../TodoSearch/index';
import { TodoList } from '../TodoList/index';
import { TodoItem } from '../TodoItem/index';
import { CreateTodoButton } from '../CreateTodoButton/index';
import { useLocalStorage } from './UseLocalStorage';


function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1',[]);
  const [searchValue, setSearchValue] = React.
  useState('');

const completedTodos = todos.filter(todo => !!todo.completed).length;
const totalTodos = todos.length;

const todosFiltro = todos.filter(
  (todo) => {
    const todoText = todo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);
  }
)


  const completeTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos[todoIndex].completed = true;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) =>{
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(
      (todo) => todo.text == text
    )
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos);
  };

  return (
    <>
    <TodoCounter 
    completed={completedTodos} 
    total={totalTodos}
    />
    <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
    />

    <TodoList>

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

    <CreateTodoButton />

   
    </>
  )
}






export default App
