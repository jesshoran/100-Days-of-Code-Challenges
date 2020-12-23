import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import TodoForm from './TodoForm';
import TodoByDay from './TodoByDay';

import Todo from './Todo'
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Col, Row } from 'react-bootstrap';




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



     
        return (
            <div className="todo-list-page">
                
                <Jumbotron className="jumbotron-2">
                <h1>Jess' Weekly To Do</h1>


                </Jumbotron>

                <Button className="add-todo-button" 
                size="lg" 
                href={`/add`} 
                variant="outline-light"
                >Add a Todo</Button>  
                
        <div className="todo-full-list">
            <div className="day-todo">
                <h2>Sunday:</h2>
           <TodoByDay todos={todos.sunday}></TodoByDay>
           </div>


           <div className="day-todo">
                <h2>Monday:</h2>
           <TodoByDay todos={todos.monday}></TodoByDay>
           </div>

           <div className="day-todo">
                <h2>Tuesday:</h2>
           <TodoByDay todos={todos.tuesday}></TodoByDay>
           </div>

           <div className="day-todo">
                <h2>Wednesday:</h2>
           <TodoByDay todos={todos.wednesday}></TodoByDay>
           </div>

           <div className="day-todo">
                <h2>Thursday:</h2>
           <TodoByDay todos={todos.thursday}></TodoByDay>
           </div>

           <div className="day-todo">
                <h2>Friday:</h2>
           <TodoByDay todos={todos.friday}></TodoByDay>
           </div>

           <div className="day-todo">
                <h2>Saturday:</h2>
           <TodoByDay todos={todos.saturday}></TodoByDay>
           </div>
        </div>

            </div>
        )
      
    };
  
export default TodoList;

