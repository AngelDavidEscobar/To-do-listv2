import { useContext } from 'react';
import {TodoContext} from '../TodoContext'
import './TodoSearch.css';

function TodoSearch() {

  const {
    searchValue,
    setSearchValue
 }= useContext(TodoContext);
  return (
    <div className='container'>
    <input
      placeholder="Cortar cebolla"
      className="TodoSearch"
      value={searchValue}
      onChange={event => {
        setSearchValue(event.target.value);
      }}
    />
    </div>
    
  );
}

export { TodoSearch };