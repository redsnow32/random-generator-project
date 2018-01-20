import React, { Component } from 'react';
import './App.css';
import Add from './components/Add/Add';
import Home from './components/Home/Home';
// import axios from 'axios'


class App extends Component {
  render() {
    return (
      <div className="App">
        




        <Home />
        <Add />
      </div>
    );
  }
}

export default App;
