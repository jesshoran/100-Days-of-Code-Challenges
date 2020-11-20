import React, { useState } from 'react';
import './App.css';

function Todo ( todo, index ) {
  return(
    <div className="to-do">
      {todo.text}
    </div>
  )
}

function TodoForm({addTodo}) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input text='text' className = "input" value={value} onChange={e => setValue(e.target.value)}></input>
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
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo}></Todo>
        ))}
      </div>
    </div>
  )

}

export default App;