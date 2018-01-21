import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import {ToastContainer,toast} from 'react-toastify'


import Add from './components/Add/Add';
// import Edit from './components/Edit/Edit';
// import Button from './components/subcomponents/Button/Button';
import Header from './components/subcomponents/Header/Header';
// import Display from './components/Display/Display'


class App extends Component {
  constructor (props) {
    super(props) 
      this.state = {

      }
    
  }
  
  render() {
    return (
      <div className="App">
        <Header />
        <Add />
      </div>
    );
  }
}

export default App;
