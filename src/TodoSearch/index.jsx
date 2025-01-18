import { useContext } from 'react';
import {TodoContext} from '../TodoContext'
import './TodoSearch.css';
import { CiSearch } from "react-icons/ci";

function TodoSearch() {

  const {
    searchValue,
    setSearchValue
 }= useContext(TodoContext);
  return (
    <div className='container'>
      <div className='SearchIcon'>
      <CiSearch size={50}/>
      </div>
      
    <input
      placeholder="Busca tu to-do"
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