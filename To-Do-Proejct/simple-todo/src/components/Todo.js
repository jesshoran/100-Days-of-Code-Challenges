import React, {useState, useEffect} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';
import Jumbotron from 'react-bootstrap/Jumbotron'

function Todo (props) {

  const params = useParams()

  const [todo, setTodo] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(`http://localhost:3000/todos/${params.id}`);
      setTodo(response.data);
    }
    fetchData();
  }, []);

  const { id, task, department, day} = todo;


  return  (
    <Jumbotron className="jumbotron-1" key={id} >
        <h1>To-Do: {task} </h1>
          {/* <h1 style={{color: 'gold'}}>{task}</h1> */}
        <h3>Is this Work, Personal or Other? {department}</h3> 
        
        <h3>Date to finish: {day}</h3>    
        <p>Add notes here:</p>
    </Jumbotron>
    )
}

export default Todo;
