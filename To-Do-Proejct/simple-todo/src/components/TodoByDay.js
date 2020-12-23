import React, { useState, useEffect } from 'react';
import {useParams, Link} from "react-router-dom";
import { Container, Col, Row, Button } from 'react-bootstrap';
import { RiLayoutRowFill } from 'react-icons/ri';

function TodoByDay (props) {
        
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
      <div className="todo-by-day">
          {props.todos?.map( todo => {
              return  (
                <div key={todo.id} className="todo">
                <Row className="justify-content-center">
                    <Col>
              <h5>{todo.task}</h5>
              </Col>
              </Row>
              
              <Row >
                  <Col>
              <Button style= {{margin: 'auto'}} size="sm" 
              href={`/todos/${todo.id}`} 
              variant="outline-light"
              className="learn-more-button"
              >See More</Button>   
              </Col>
               </Row> 

               {/* <Col lg={4}>
              <p>{todo.department}</p>  
             </Col> */}
         
      </div>
              )
          })}
      </div>
  )
}

export default TodoByDay;