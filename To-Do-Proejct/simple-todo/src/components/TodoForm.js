// import React, { useState, useEffect } from 'react';


// export default function TodoForm({addTodo}) {
//     const [value, setValue] = useState('');
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       if(!value) return;
//       addTodo(value);
//       setValue('');
//     }
  
//     return (
//       <form onSubmit={handleSubmit}>
//         <label htmlFor="task">Task:</label>
//             <input type="text" id="task" />
//             <label htmlFor="day">Day:</label>
//             <input type="text" id="day" />
//             <label htmlFor="date">Date:</label>
//             <input type="text" id="date" />
//             <label htmlFor="department">Department</label>
//             <input type="text" id="department" />
//             <input type="submit" className="submit" />
//         {/* <input text="text" className="input" value={value} onChange={e => setValue(e.target.value)}></input> */}
//       </form>
//     )
//   }