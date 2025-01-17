import { createContext, useState } from "react";
import { useLocalStorage } from "./UseLocalStorage";
import React from "react";

const TodoContext = createContext();

function TodoProvider({children}){
    const {item: todos,
        saveItem: saveTodos,
        loading,
        error,
        } = useLocalStorage('TODOS_V1', []);
        const [searchValue, setSearchValue] = React.useState('');

        const completedTodos = todos.filter((todo) => !!todo.completed).length;
        const totalTodos = todos.length;
        const [openModal, setOpenModal] = useState(false);

        

        const todosFiltro = todos.filter((todo) => {
            const todoText = todo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
            return todoText.includes(searchText);
        });

        const addTodo = (text) =>{
            const newTodos = [...todos];
            newTodos.push({
                text,
                completed: false,
            })
            saveTodos(newTodos);
        }

        const completeTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex((todo) => todo.text === text);
            newTodos[todoIndex].completed = true;
            saveTodos(newTodos);
        };

        const deleteTodo = (text) => {
            const newTodos = [...todos];
            const todoIndex = newTodos.findIndex((todo) => todo.text === text);
            newTodos.splice(todoIndex, 1);
            saveTodos(newTodos);
        };

    return(
        <TodoContext.Provider value={{
            loading,
            error,
            completedTodos,
            totalTodos,
            searchValue,
            setSearchValue,
            todosFiltro,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            addTodo 
        }}>
            {children}
        </TodoContext.Provider>
    )
}




export {TodoContext, TodoProvider}