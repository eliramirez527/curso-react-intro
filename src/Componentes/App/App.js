import React from 'react';
import  AppUI  from './AppIU';
import { TodoProvider } from '../TodosContext/Todoscontext';


function App() {
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;