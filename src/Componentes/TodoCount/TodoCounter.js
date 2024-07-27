import React from 'react';
import '../TodoCount/TodoCounter.css';
import { TodoContext } from '../TodosContext/Todoscontext';

function TodoCounter() {
  const {
    completedTodos,
    totalTodos,
  } = React.useContext(TodoContext)

  return (
    <h1 className='Todocounter'>
      Has completado <span> {completedTodos}</span> de <span>
        {totalTodos}</span> TODOs
    </h1>
  );
}

export default TodoCounter;