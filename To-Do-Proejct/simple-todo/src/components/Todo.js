import React, { useState, useEffect } from 'react';


export default function Todo ( props
  // {todo, index, completeTodo, removeTodo, day}
   ) {

  const getTodos = async () => {
    try {
      const response = await fetch('http://localhost:3000/todos')
      const data = await response.json()
      console.log(data)
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
    
    return(
      <div> 
        <h1>To Do List</h1>
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

  
