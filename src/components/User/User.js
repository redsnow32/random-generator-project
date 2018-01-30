import React, {Component} from 'react';
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
                     <li key={user.id} onClick={ ()=> {this.props.selectedUser(user) }}>
                         {user.name}{user.email}<button id="edit" onClick={this.props.edit(user.id, user.name, user.email)}>Edit</button> <button id="edit" 
                         onClick={()=>{this.props.delete(user.id)}}>Delete</button></li>
                 )
                })}
                
                </ul>
            </div>

        )
    }
}