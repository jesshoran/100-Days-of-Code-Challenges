import React from "react";
import { Link } from "react-router-dom";
import { Nav } from 'react-bootstrap';


function NavBar(props) {
  
    let navBarItems = [
        <li key={1}>
            <Link to="/">Home</Link>
        </li>,
        // <li key={2}>
        //     <Link to="/add">Add Todo</Link>
        // </li>

        ]
    return (
      <>
        <nav>
           <ul>{navBarItems}</ul>
          
        </nav>
      </>
    );
  }
  
  export default NavBar;
  