import React, { useState, useEffect } from 'react';


export default function Todo ( {todo, index, completeTodo, removeTodo, day} ) {
    return(
      <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="to-do">
        {todo.text}
        <div>
          <button onClick={() => completeTodo(index)}>Complete</button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </div>
      </div>
    )
  }

  
