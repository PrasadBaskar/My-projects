import React, { useState } from 'react';


const TodoApp = () => {
  // State to hold the list of todos and the input value
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo) {
      setTodos([...todos, { text: newTodo }]);
      setNewTodo('');
    }
  };

  // Function to delete a todo
  const deleteTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  return (
    <div className="todo-app">
      <h1 className="header">Todo App</h1>
      <div className="input-container">
        <input
          type="text"
          className="todo-input"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
         
        />
        <button className="add-button" onClick={addTodo}>Add Todo</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.text}
            <button className="delete-button" onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

