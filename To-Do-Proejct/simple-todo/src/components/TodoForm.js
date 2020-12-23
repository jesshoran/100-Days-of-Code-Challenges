import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { Form, Col, Row } from 'react-bootstrap';
import Jumbotron from 'react-bootstrap/Jumbotron'


function TodoForm(props) {
    const [todos, setTodos] = useState([]);

    const [formInputs, updateFormInputs] = useState({
        task: '',
        department: '',
        day: '',
        isCompleted: false
      });

    const [checked, setChecked] = useState(false);
    const onClick = (event) => {
      setChecked(event.target.checked)
      // updateFormInputs(formInputs.isCompleted.checked)
      console.log(formInputs)
    };
    

    const handleChange = (event) => {
      const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value})
      updateFormInputs(updatedFormInputs)
      // console.log(updatedFormInputs)
      }
    
    const handleChangeCheck = (event) => {
      const value =
      event.target.type === "checkbox" ? event.target.checked : event.target.value;
       updateFormInputs({
      ...formInputs,
      [event.target.id]: value
    })}

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
            isCompleted: Boolean  
          })
          await setTodos([createdTodos, ...todos])
          console.log(createdTodos)
        }catch(error){
          console.error(error)
        }
      }

// why is it not rendering the page with the new information?
        return (
          <div className="form">
          <Jumbotron className="jumbotron-1">
            <Form className="todo-form" onSubmit={handleSubmit}>
            <h1>Add a Todo Here</h1>
              <fieldset>
              <Form.Row>             
                <Form.Group controlId="formBasicText">
                  <Form.Label htmlFor="task">Task:</Form.Label>
                    <Form.Control 
                      type="text" 
                      id="task"
                      value={formInputs.task} 
                      onChange={handleChange}
                      placeholder="Eat cake...cheat day!"/>
                </Form.Group>
              
              </Form.Row>
              <Form.Row>

                  <Form.Group>
                    <Form.Label htmlFor="day">Day:</Form.Label>
                      <Form.Control
                      as="select"
                      // type="text" 
                      id="day"
                      value={formInputs.date} 
                      onChange={handleChange}
                      placeholder="Select Day">
                        <option>Sunday</option>
                        <option>Monday</option>
                        <option>Tuesday</option>
                        <option>Wednesday</option>
                        <option>Thursday</option>
                        <option>Friday</option>
                        <option>Saturday</option>
                        </Form.Control>
                    </Form.Group >
                </Form.Row>
                <Form.Row>
                 
                    <Form.Group>
                      <Form.Label htmlFor="department">Work, Personal, Other?</Form.Label>
                      <Form.Control  
                      id="department" 
                      type="text"
                      value={formInputs.department} 
                      onChange={handleChange}
                      placeholder="Personal"/>
                    </Form.Group>
                   
                    </Form.Row>
                  <Form.Row>
                    <Form.Group>
                      <Form.Label htmlFor="isCompleted">Done?</Form.Label>
                      <Form.Control  
                      id="isCompleted" 
                      type="checkbox"
                      value={formInputs.isCompleted}
                      checked={checked}
                      onChange={handleChangeCheck}
                      onClick={onClick}
                      
                      />
                     </Form.Group>
                     </Form.Row>
{/* no value is being pushed for isCompleted */}

               
      
           <Form.Row>  
            <Form.Control type= "submit" className="submit" />
            </Form.Row> 
            </fieldset> 
 
       </Form>
       </Jumbotron>
       </div>
    )
}

export default TodoForm;
