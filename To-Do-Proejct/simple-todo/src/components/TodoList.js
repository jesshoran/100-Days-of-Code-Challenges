import React, {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

import axios from 'axios';
import TodoForm from './TodoForm';
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

    const allTodos = todos.map ( todo => {
    return (
        <Row key={todo.id} className="todo">
                  <Col lg={4} className="justify-content-center">
                <h5>{todo.task}</h5>
                </Col>
                
                <Col lg={4}>
                <Button style= {{margin: 'auto'}} size="sm" 
                href={`/todos/${todo.id}`} 
                variant="outline-light"
                className="learn-more-button"
                >Learn More</Button>   
                 </Col> 

                 <Col lg={4}>
                <p>{todo.department}</p>  
               </Col>
           
        </Row>
            );
        });
        return (
            <div>
                
                <Jumbotron className="jumbotron-2">
                <h1>Jess' Weekly To Do</h1>


                </Jumbotron>

                <Button className="add-todo-button" 
                size="lg" 
                href={`/add`} 
                variant="outline-light"
                >Add a Todo</Button>  
            {allTodos}
            </div>
        )
      
    };
  
export default TodoList;

