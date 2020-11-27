import React, { useState, useEffect } from 'react';


export default function TodoForm({addTodo}) {
    const [value, setValue] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if(!value) return;
      addTodo(value);
      setValue('');
    }
  
    return (
      <form onSubmit={handleSubmit}>
        <input text="text" className="input" value={value} onChange={e => setValue(e.target.value)}></input>
      </form>
    )
  }