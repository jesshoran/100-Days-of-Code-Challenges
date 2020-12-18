import React, { useState, useEffect } from 'react';


export default function Todo ( props, todo, index
  // {todo, index, completeTodo, removeTodo, day}
   ) {
    const [todos, setTodos] = useState([]);
    const completeTodo = (index, todos, setTodos) => {
      const newTodos = [...todos];
      newTodos[index].isCompleted = true;
      setTodos(newTodos)
    }
    
    return(

      <div className="container"> 
        <h1>Sunday</h1>
        <div className="byday">
          {props.todos.map( todo => {

              console.log(todo)
                  return  (
                       <div key={todo.index} className="todo">
                           <h5>{todo.task}</h5>
                            <p>{todo.department}</p>
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


      </div>
      


    )
  }

  
