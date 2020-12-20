import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo (props) {
  return  (
    <div key={props.todo.index} className="todo">
        <h5>{props.todo.task}</h5>
        <p>{props.todo.department}</p>    
    </div>
    )
}

export default Todo;
