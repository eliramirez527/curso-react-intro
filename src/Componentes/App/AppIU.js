import React from 'react';
import TodoList from '../TodoList/TodoList';
import TodoCounter from '../TodoCount/TodoCounter';
import TodoSearch from '../TodoSearch/TodoSearch';
import TodoItem from '../TodoItem/TodoItem';
import CreateTodoButton from '../CreateTodoButton/CreateTodoButton';
import TodosError from '../TodosError/TodosError';
import EmptyTodos from '../EmptyTodos/EmptyTodos';
import TodoForm from '../TodoForm/todoForm';
import TodosLoading from '../TodosLoading/TodosLoading';
import Modal from '../Modal/Modal';
import { TodoContext } from '../TodosContext/Todoscontext';

function AppUI() {
  const {
    loading,
    error,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  return (
    <>
      <TodoCounter />
      <TodoSearch />

      <TodoList>
        {loading && (
          <>
            <TodosLoading />
            <TodosLoading />
            <TodosLoading />
          </>
        )}
        {error && <TodosError/>}
        {(!loading && searchedTodos.length === 0) && <EmptyTodos />}

        {searchedTodos.map(todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      
      <CreateTodoButton
        setOpenModal={setOpenModal}
      />

      {openModal && (
        <Modal>
          <TodoForm />
        </Modal>
      )}
    </>
  );
}
  export default AppUI ;