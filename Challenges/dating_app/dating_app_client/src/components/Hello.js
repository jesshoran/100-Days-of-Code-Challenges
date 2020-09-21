import React, {useState, useEffect} from 'react';

export default function Daters (props) {
    const [daters, setDaters] = useState([])



    const getDaters = async () => {
        try{
        const response = await fetch('http://localhost:3000/users')
        const daters = await response.json();
        setDaters(daters)
        console.log(daters);
        }catch(error){
         console.error(error);
         }
       }

       useEffect(
        ()=>{
          const callDaters = async ()=>{
           await getDaters();	
         }
         callDaters();
        }, 
        []
        )

    return (
        <div className="App">
  
          {
        daters.map( dater =>{
          return (
            <div key={dater.id} className="dater">
              <h3>Name: {dater.name}</h3>
              <img src={dater.img} alt={dater.name}/>
              <h4>Starsign: {dater.starsign} </h4>
              <h4>Age: {dater.age} </h4>
              {dater.ltl ?
                <h5> Loves to laugh and have a good ol time </h5> :
                <h5>Hates laughing, doesn't like fun</h5>
              }
            </div>
          )
        })
      }
        </div>
      );
  }