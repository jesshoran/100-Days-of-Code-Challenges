import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import './App.css';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js'


function App () {
  return (
    <div className="app">
          <TodoList/>
          
    </div>
  );
}

export default App;