import React, { useState } from 'react';
import './App.css';
import Todo from './components/Todo.js'
import TodoForm from './components/TodoForm.js'





function App () {
  const [todos, setTodos] = useState([0
      //initial data
    // {
    //   text: "Go to the store",
    //   isCompleted: false
    // },
    // {
    //   text: "Meet friend for happy hour",
    //   isCompleted: false
    // },
    // {
    //   text: "Get nails done",
    //   isCompleted: false
    // }
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos)
  }

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <h1 className="jess">Jess' To-do List</h1>
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo 
          key={index} 
          index={index} 
          todo={todo}
          completeTodo={completeTodo}
          removeTodo={removeTodo}>
          </Todo>
        ))}
        <TodoForm addTodo={addTodo}></TodoForm>
      </div>
    </div>
  )

}

export default App;