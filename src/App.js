import React, { Component, Fragment } from 'react';
import './App.css';

//components
import Header from "./components/Header";
import Todo from "./components/Todo";

class App extends Component {
  render() {
    return (
      <Fragment>
      <div className="shape"></div>
      <div className="App">
          <Header />
          <Todo />
      </div>
      </Fragment>
    );
  }
}

export default App;
