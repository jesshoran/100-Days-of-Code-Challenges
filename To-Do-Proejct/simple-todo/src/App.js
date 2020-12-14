import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Todo from './components/Todo.js'
import TodoForm from './components/TodoForm.js'


function App () {
  const [todos, setTodos] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    task: '',
    day: '',
    department: ''
  });
  
  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos')
      const data = await response.json();
      setTodos(data)
    }catch (error) {
      console.log(error)
    }
  }
  useEffect(()=>{
    (
      async function () {
        await getTodos()
      }
    )()
  },[])

  const handleChange = (event) => {
    const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value})
    updateFormInputs(updatedFormInputs);
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        'http://localhost:3000/todos',
        formInputs
      );
      const createdTodos = response.data
      await updateFormInputs({
        task: '',
        day: '',
        department: ''
      })
      await setTodos([createdTodos, ...todos])
    }catch(error){
      console.error(error)
    }
  }

  

  // const completeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos[index].isCompleted = true;
  //   setTodos(newTodos)
  // }

  // const removeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // }

  return (
    <div className="app">
      <h1 className="container">Jess' Weekly To-do List</h1>
      <div className="todo-list">
        <div className="todos">
          <Todo 
          todos={todos} 

          // index={index} 
          // completeTodo={completeTodo}
          // removeTodo={removeTodo}
          >
            
          </Todo>
          </div>

            <form onSubmit={handleSubmit}>
              <label htmlFor="task">Task:</label>
                <input 
                type="text" 
                id="task"
                value={formInputs.task} 
                onChange={handleChange}/>
              
              <label htmlFor="day">Day:</label>
                <input 
                type="text" 
                id="day" 
                value={formInputs.day} 
                  onChange={handleChange}
                />
              <label htmlFor="department">Work, Personal, Other?</label>
                <input 
                id="department" 
                type="text"
                value={formInputs.department} 
                onChange={handleChange}/>
               
                
            <input type="submit" className="submit" />
       </form>
      </div>
    </div>
  )

}

export default App;