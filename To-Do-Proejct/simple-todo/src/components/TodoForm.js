import React, {useState, useEffect, useRef} from 'react'
import axios from 'axios';
import { Form, Col, Row } from 'react-bootstrap';

function TodoForm(props) {
    const [todos, setTodos] = useState([]);

    const [formInputs, updateFormInputs] = useState({
        task: '',
        department: '',
        day: '',
        isCompleted: false,
      });
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
            department: '',
            day: '',
            isCompleted: false,
          })
          await setTodos([createdTodos, ...todos])
        }catch(error){
          console.error(error)
        }
      }


        return (
            <Form className="todo-form" onSubmit={handleSubmit}>
        
                 <Form.Control
                  placeholder='Update your item'
                  value={formInputs.task}
                  onChange={handleChange}
                  name='task'
                  className='todo-input edit'
                />
                 <button onClick={handleSubmit} className='todo-button edit'>
                   Update
                </button>
     
        
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
       
    )
}

export default TodoForm
