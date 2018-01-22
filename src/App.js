import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import {ToastContainer,toast} from 'react-toastify'


import Add from './components/Add/Add';
// import Edit from './components/Edit/Edit';
// import Button from './components/subcomponents/Button/Button';
import Header from './components/subcomponents/Header/Header';
// import Display from './components/Display/Display'
import User from './components/User/User'


class App extends Component {
  
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
