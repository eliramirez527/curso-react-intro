import React from 'react';
import '../TodoSearch/TodoSearch.css';
import { TodoContext } from '../TodosContext/Todoscontext';

function TodoSearch() {
  const {
    searchValue,
    setSearchValue,
  } = React.useContext(TodoContext)

  return (
  <input
    placeholder="Introduce un TODO"
    className="TodoSearch"
    value={searchValue}
    onChange={(event) => {
      setSearchValue(event.target.value);
    }}
  />
  );
}

export default TodoSearch;