import React, {useState, useEffect} from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo (props) {
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
  

}
    {this.props.todos.map( todo => {
          return  (
               <div key={todo.index} className="todo">
                   <h5>{todo.task}</h5>
                    <p>{todo.department}</p>
                    {/* <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}
                    className="completed">
        
                    <button onClick={() => completeTodo(todo)}>Complete</button>
                <button onClick={() => removeTodo(index)}>Delete</button>
              </div> */}
             </div>
            )
        })}







export default Todo
