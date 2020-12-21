import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import TodoForm from './TodoForm';
import Todo from './Todo'



function TodoList ( props ) {
    const [todos, setTodos] = useState([]);
    const getTodos = async () => {
      try {
        const response = await fetch('http://localhost:3000/todos')
        const data = await response.json();
        setTodos(data)
        console.log(data)
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

    const allTodos = todos.map ( todo => {
    return (
            <div key={todo.id} className="todo">
                <h5>{todo.task}</h5>
                <p>{todo.department}</p>   
                <p>{todo.day}</p>
                <Button style= {{margin: 'auto'}} size="sm" 
                href={`/todos/${todo.id}`} 
                variant="outline-light"
                >Learn More</Button>   
            </div>
            );
        });
        return (
            <div>
                <h1>What do we have going on this week?</h1>
                <Button className="add-todo-button" 
                size="lg" block
                href={`/add`} 
                variant="outline-light"
                >Add a Todo</Button>  
            {allTodos}
            </div>
        )
      
    };
  
export default TodoList;

