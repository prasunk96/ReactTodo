import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/todo-input';

import getTodoActionCreator from "./store/ActionCreator";
import connect from "react-redux/lib/connect/connect";

class App extends Component {
  componentDidMount() {
    this.props.fetchList();
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to ToDo App</h1>
        </header>
        <div className="row center">
          <div className="col-md-4 todo">
            <TodoInput />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchList: () => dispatch(getTodoActionCreator)
  }
}
export default connect(null, mapDispatchToProps)(App);
