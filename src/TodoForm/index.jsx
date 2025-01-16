import { useContext, useState } from 'react';
import './TodoForm.css'
import {TodoContext} from '../TodoContext/index'
 
 function TodoForm (){
    const{
        addTodo,
        setOpenModal,
    } = useContext(TodoContext)
    
    const [newTodoValue, setNewTodoValue] =
     useState('');

    const isDescriptionValid = (newTodoValue.length >= 2) ? true : false;
    const onSubmit = (event) => {
        event.preventDefault();
        if(!isDescriptionValid) return;
        addTodo(newTodoValue)
        setOpenModal(false);
        
    }

    const onCancel = () =>{
        setOpenModal(false)
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value);
    }
    return(
        <form onSubmit={onSubmit}> 
            <label>Escribe un nuevo TODO</label>
            <textarea
                value={newTodoValue}
                onChange={onChange}
                placeholder="Tarea probablemente muy importante..."            
            />

           <div className="TodoForm-buttonContainer">
           <button 
                type='button'
                className="TodoForm-button--cancel"
                onClick={onCancel}>
                Cancelar
            </button>
            <button 
                type='submit'
                className="TodoForm-button--add"
                disabled ={!isDescriptionValid}>
                Añadir
            </button>
           </div>
        </form>
    )
 }

 export {TodoForm}