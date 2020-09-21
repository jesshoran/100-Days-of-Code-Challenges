import React from 'react';

export default function Daters (props) {

    const getDaters = async () => {
        try{
        const response = fetch('localhost:3000/users')
        const daters = await response.json();
        console.log(daters);
        }catch(error){
         console.error(error);
         }
       }
       
    return (
        <div className="App">
          <h1>Hello Dating World</h1>   
             
        </div>
      );
  }