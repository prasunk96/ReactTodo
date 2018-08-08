import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/todo-input';
import TodoList from './components/todo-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ToDo App</h1>
        </header>
        <div>
          <TodoInput />
        </div>
        <div>
          <TodoList />
        </div>
      </div>
    );
  }
}

export default App;
