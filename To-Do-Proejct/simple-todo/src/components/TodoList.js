import React, {useState, useEffect} from 'react';
import axios from 'axios';
import TodoForm from './TodoForm';
import Todo from './Todo'

function TodoList ( props) {
    const [todos, setTodos] = useState([]);
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

    

    const showTodos = todos.map( todo => {
        return (
            <Todo 
            key={todo.id}
            todo={todo}
            ></Todo>
        )
    })

    return(

        <>
        <h1>What's the Plan for Today?</h1>
        {showTodos}
        <TodoForm 
        />
      </>
    );
  }
  
export default TodoList



