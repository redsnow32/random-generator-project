import React, {Component} from 'react';
import axios from 'axios'
import './User.css'


export default class User extends Component {
    constructor (props) {
        super (props) 
        this.state={
            name:this.props.name,
            email:this.props.email
        }
    
    }
    render () {
        return (
            <div className="usercontainer">
                
                <h1>Users</h1>
                
                <ul className="container">
                 {
                     this.props.users.map((user)=>{
                        return (
                     <li key={user.id} onClick={ ()=> {this.props.selectedUser(user) }}>{User.name}</li>
                 )
                })}
                
                </ul>
            </div>

        )
    }
}