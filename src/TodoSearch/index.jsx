
import './TodoSearch.css';

function TodoSearch({
  searchValue, 
  setSearchValue
}) {
    console.log("entro")

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