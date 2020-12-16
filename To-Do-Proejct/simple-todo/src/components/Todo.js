import React, { useState, useEffect } from 'react';


export default function Todo ( props
  // {todo, index, completeTodo, removeTodo, day}
   ) {
    // const [todos, setTodos] = useState([]);

    
    return(

      <div className="tuesday"> 
        <h1>Sunday</h1>
        <div className="byday">
          
              {props.todos.map( todo => {
                
                  return  (
                       <div key={todo.id} className="todo">
                        <h3> {todo.date} {console.log(todo)}</h3>
                           <h3>{todo.task}</h3>
                            <h4>{todo.department}</h4>
                       </div>
                    )
                })}
            </div>
      <div></div>
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

  
