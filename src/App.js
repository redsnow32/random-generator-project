import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
// import { ToastContainer, toast } from 'react-toastify'


import Add from './components/Add/Add';
import Edit from './components/Edit/Edit';
import Button from './components/subcomponents/Button/Button';
import Header from './components/subcomponents/Header/Header';
import User from './components/User/User'
// import Editorcomponent from './components/Editorcomponent'



class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [],
      selectedUser: [],
      originalUser: null,
      notModified: true,
      time:[],
      day:[],
      id:'',
      name:'',
      email:''
    }
    this.setAppState = this.setAppState.bind(this)
    this.selectUser = this.selectUser.bind(this)
    this.refresh = this.refresh.bind(this)
    this.deleteUser=this.deleteUser.bind(this)
    this.updateUser=this.updateUser.bind(this)
  }

  componentDidMount() {
    axios.get('/api/users').then((res) => {
      console.log(res.data)
      this.setState({ users: res.data })
    })
  }
  componentWillMount() {
    axios.get('http://worldclockapi.com/api/json/est/now').then((res)=> {
      this.setState({time:res.data.currentDateTime,
                    day:res.data.dayOfTheWeek})
  
  })
}

  setAppState(prop, val) {
    this.setState({ [prop]: val })
  }
  selectUser(user) {
    console.log(this.state.selectUser)
    this.setState({ selectedUser: user })

  }
  refresh() {
    this.setState(this.state)
  }
  deleteUser (userId) {
    // console.log(userId)
    axios.delete (`/api/users/${userId}`).then((resp)=>{
      this.setState({users:resp.data})
    })

}
updateUser (updateId,user) {
  console.log(this.state.selected)
  // console.log(updateId)
  let body = {
    id:updateId,
    // name:
    // email:
  }
  axios.put(`/api/user/${updateId}`,body).then((res)=>{
      this.setState({users:res.data})

  })
}


  render() {
    return (
      <div>
      <Header />
        <div className="App">
          

          <Add set={this.setAppState} user={this.state.users} selected={this.state.selectedUser} selectedUser={this.selectUser} />
          <div className="users">
            <Button />
            <User users={this.state.users} selectedUser={this.selectUser} delete={this.deleteUser} edit={this.updateUser}/>
            <Edit selected={this.selectedUser} selectedUser={this.props.selectedUser} />
            {/* <Editorcomponent selectedUser={this.props.selectedUser}/> */}
          </div>
        </div>
        <footer>
          <div className="footer">
          <h3>{this.state.time} {this.state.day}</h3>
          </div>
          </footer>
      </div>
    );
  }
}

export default App;
