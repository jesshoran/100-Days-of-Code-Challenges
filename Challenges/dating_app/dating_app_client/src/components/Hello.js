import React from 'react';

export default function Daters (props) {

    return (
        <div>
            
    
        {props.users.map(user =>{

          return (
            <div key={user.id} className="dater">
              <h3>Name: {user.name}</h3>
              <img src={user.img} alt={user.name}/>
              <h4>Starsign: {user.starsign} </h4>
              <h4>Age: {user.age} </h4>
              {user.ltl ?
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