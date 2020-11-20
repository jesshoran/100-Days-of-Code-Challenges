import React, { useState } from 'react';
import './App.css';

function Todo ( {todo, index, completeTodo, removeTodo} ) {
  return(
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}
    className="to-do">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>Delete</button>
      </div>
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input text="text" className="input" value={value} onChange={e => setValue(e.target.value)}></input>
    </form>
  )
}

function App () {
  const [todos, setTodos] = useState([
      //initial data
    {
      text: "Go to the store",
      isCompleted: false
    },
    {
      text: "Meet friend for happy hour",
      isCompleted: false
    },
    {
      text: "Get nails done",
      isCompleted: false
    }
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
      <h1 className="jess">To-do List</h1>
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