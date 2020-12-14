import React, { useState, useEffect } from 'react';


export default function Todo ( props
  // {todo, index, completeTodo, removeTodo, day}
   ) {
    // const [todos, setTodos] = useState([]);

    
    return(

      <div> 
        <h1>Sunday</h1>
        <div className="bydate">
          
              {props.todos.map( todo => {
                  return  (
                       <div key={todo.id} className="todo">
                         {/* {todo.day}</h2> */}
                           <h3>{todo.task}</h3>
                            <h4>{todo.department}</h4>
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

  
