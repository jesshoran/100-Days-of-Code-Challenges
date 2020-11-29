import React, { useState, useEffect } from 'react';


export default function Todo ( props
  // {todo, index, completeTodo, removeTodo, day}
   ) {
    // const [todos, setTodos] = useState([]);

    
    return(

      <div> 
        <h1>To Do List</h1>
        <div>
              {props.todos.map( todo => {
                  return  (
                       <div key={todo.id} className="todo">
                           <h3>{todo.task}</h3>
                          {/* <p>{todo.day}</p>
                          <p>{todo.department}</p>
                          <small>{todo.date}</small> */}
                       </div>
                    )
                })}
            </div>
      {/* <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="to-do">
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => removeTodo(index)}>Delete</button>
     </div>
      </div> */}
      </div>
    )
  }

  
