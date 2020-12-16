import React, { useState, useEffect } from 'react';


export default function Todo ( props, todo, index
  // {todo, index, completeTodo, removeTodo, day}
   ) {
    const [todos, setTodos] = useState([]);
    const completeTodo = (index) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos)
    }
    
    return(

      <div className="tuesday"> 
        <h1>Sunday</h1>
        <div className="byday">
          
              {props.todos.map( todo => {
                
                  return  (
                       <div key={todo.index} className="todo">
                        <h3> {todo.day} </h3>
                           <h3>{todo.task}</h3>
                            <h4>{todo.department}</h4>
                            <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}
                            className="completed">
                          <div>
                            <button onClick={() => completeTodo(todo)}>Complete</button>
                        {/* <button onClick={() => removeTodo(index)}>Delete</button> */}
                      </div>
      </div>
                       </div>
                    )
                })}
            </div>
      <div></div>

      </div>
      


    )
  }

  
