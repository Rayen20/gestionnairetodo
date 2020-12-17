import React, { useState } from 'react';
import CreationTodo from './CreationTodo';
import MaTodo from './MaTodo';


function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };


  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1 >Gestionnaire de Ma To Do</h1>
   
      <CreationTodo
        onSubmit={addTodo}
     
      />
      <br>
      </br>
      <MaTodo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      
      />
    </>
  );
}

export default TodoList;