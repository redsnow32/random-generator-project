import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import {ToastContainer,toast} from 'react-toastify'


import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import Button from './components/subcomponents/Button/Button';
import Header from './components/subcomponents/Header/Header';
import User from './components/User/User'
import Editorcomponent from './components/Editorcomponent'



class App extends Component {
  constructor (props) {
    super(props) 
      this.state = {
        users:[],
        selectedUser:null
      }
    this.setAppState=this.setAppState.bind(this)
  }

  componentDidMount () {
    axios.get(`http://localhost:3232/api/users`).then((res)=>{
        this.setState({users:res.data})
        // console.log(res.data)
  })
}

  setAppState (prop, val) {
    this.setState({[prop]:val})

  }
  selectUser(user) {
    // this.setState({selectedUser:user})
    console.log(user)
  }


  render() {
    return (
      <div className="App">
        <Header />
     
        <Add set={this.setAppState} user={this.state.users}/>
        <div className="users">
        <Button />
        <Edit selected={this.state.selectedUser}/>
        <User users={this.state.users} selectedUser={this.selectUser} />
  
        
        </div>
      </div>
    );
  }
}

export default App;
