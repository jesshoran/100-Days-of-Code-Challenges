import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Daters from './components/Hello'

export default function App() {
  const [users, setUsers] = useState([])
  const [formInputs, updateFormInputs] = useState({
    name: '',
    starsign: '',
    age: 0,
    img: '',
    ltl: false
  })

  const getUsers = async () => {
    try{
    const response = await fetch('http://localhost:3000/users')
    const data = await response.json();
    setUsers(data)
    console.log(data);
    }catch(error){
     console.error(error);
     }
   }

   useEffect(
    ()=>{
      (
        async function (){
           await getUsers();
        }
      )()
    }, [])

    const handleChange = (event) => {
      const updatedFormInputs = Object.assign({}, formInputs, { [event.target.id]: event.target.value })
      updateFormInputs(updatedFormInputs);
    }
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const response = await axios.post(
          'http://localhost:3000/users',
          formInputs
        );
        const createdUser = response.data
        await updateFormInputs({
          name: '',
          starsign: '',
          age: 0,
          img: '',
          ltl: false
        })
        await setUsers([createdUser, ...users])
      }catch(error){
        console.error(error)
      }
    }


  return (
      <div className="App">
        <div className="container">
          <nav><Daters /></nav>
          <main>
          <h1>Hello Dating World</h1> 
        </main>
        <aside><Daters /></aside>
        </div>
        <footer>
        <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name" value={formInputs.name}
        onChange={handleChange}
      />
      <label htmlFor="starsign">Starsign</label>
      <input
        type="text"
        id="starsign" value={formInputs.starsign}
        onChange={handleChange}
      />
      <label htmlFor="age">Age</label>
      <input
        type="number"
        id="age" value={formInputs.age}
        onChange={handleChange}
      />
      <label htmlFor="img">Image</label>
      <input
        type="text"
        id="img" value={formInputs.img}
        onChange={handleChange}
      />
      <label htmlFor="ltl">Likes to Laugh</label>
      <input
        type="boolean"
        id="ltl" value={formInputs.ltl}
        onChange={handleChange}
      />
      <input type="submit" className="submit" />
    </form>

        </footer>
      </div>
    );
  }

