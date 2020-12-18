import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Col, Row } from 'react-bootstrap';
import './App.css';
import Todo from './components/Todo.js'
import TodoForm from './components/TodoForm.js'


function App () {
  const [todos, setTodos] = useState([]);
  const [formInputs, updateFormInputs] = useState({
    task: '',
    department: '',
    day: '',
    isCompleted: false,
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
    // const target = event.target
    // const value = target.type === 'checkbox' ? target.checked : target.value;
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
        department: '',
        day: '',
        isCompleted: false,
      })
      // const [isCompleted, setIsCompleted] = useState(false);
      await setTodos([createdTodos, ...todos])
    }catch(error){
      console.error(error)
    }
  }

  

  // const completeTodo = (id) => {
  //   const newTodos = [...todos];
  //   newTodos[id].isCompleted = true;
  //   setTodos(newTodos)
  // }

  // const removeTodo = (index) => {
  //   const newTodos = [...todos];
  //   newTodos.splice(index, 1);
  //   setTodos(newTodos);
  // }

  const [checked, setChecked] = useState(false);

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

            <Form onSubmit={handleSubmit}>
              <fieldset>
         
              <Form.Row xs={4} md={6} lg={12}>
                <Col lg={5}>
                  <Form.Group>
                    <Form.Label htmlFor="task">Task:</Form.Label>
                      <Form.Control 
                      type="text" 
                      id="task"
                      value={formInputs.task} 
                      onChange={handleChange}
                      placeholder="Eat cake...cheat day!"/>
                  </Form.Group>
                  </Col>
                <Col lg={3}>
                  <Form.Group>
                    <Form.Label htmlFor="day">Day:</Form.Label>
                      <Form.Control
                      as="select"
                      // type="text" 
                      id="day"
                      value={formInputs.date} 
                      onChange={handleChange}
                      placeholder="Sunday">
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        </Form.Control>
                    </Form.Group >
                    </Col>
                 
                <Col lg={3}>
                    <Form.Group>
                      <Form.Label htmlFor="department">Work, Personal, Other?</Form.Label>
                      <Form.Control  
                      id="department" 
                      type="text"
                      value={formInputs.department} 
                      onChange={handleChange}
                      placeholder="Personal"/>
                    </Form.Group>
                    </Col>
                    <Col lg={1}>
                 
                    <Form.Group>
                      <Form.Label htmlFor="isCompleted">Done?</Form.Label>
                      <Form.Control  
                      id="isCompleted" 
                      type="checkbox"
                      // defaultValue={false}
                      checked={checked}
                      onChange={e =>
                        setChecked(!checked)
                        }
                      // value={formInputs.isCompleted} 
                      onChange={handleChange}/>
                  </Form.Group>
                  </Col>
           </Form.Row>
           <Form.Row>  
            <Form.Control type="submit" className="submit" />
            </Form.Row> 
            </fieldset> 
       </Form>
      </div>
    </div>
  )

}

export default App;