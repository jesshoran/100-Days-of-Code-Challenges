import React, { useState, useEffect } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import './index.css';
import Todo from './components/Todo.js';
import TodoForm from './components/TodoForm.js';
import TodoList from './components/TodoList.js';
import NavBar from './components/NavBar.js'


function App () {
  return (
    <div className="app">
          <NavBar/>

          <Switch>
          <Route
            path="/add"
            render={() => {
              return (
                <TodoForm/>
            );
          }}
          />
            <Route
              path="/todos/:id"
              render={() => {
                return (
                  <Todo/>
                );
              }}
            />   
          <Route
            path="/"
            render={() => {
              return (
                <TodoList/>
            );
          }}
          />   

            </Switch>
    </div>
  );
}

export default App;