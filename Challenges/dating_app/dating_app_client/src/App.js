import React from 'react';
import Daters from './components/Hello.js'

export default function App() {
  return (
      <div className="App">
        <div className="container">
          <nav><Daters /></nav>
          <main>
          <h1>Hello Dating World</h1> 
        </main>
        <aside></aside>
        </div>
        <footer/>
      </div>
    );
  }

