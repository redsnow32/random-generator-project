import React, { Component } from 'react';
import axios from 'axios';
import './Add.css'
import Edit from '../Edit/Edit'
// import Display from '../Display/Display'
import User from '../User/User'

export default class Add extends Component {
    constructor (props) {
        super(props)
        this.state ={
            id:'',
            name:'',
            email:''

        }
        this.handleChange=this.handleChange.bind(this)
        this.deleteUser=this.deleteUser.bind(this)
        this.updateUser=this.updateUser.bind(this)
        this.submit=this.submit.bind(this)
        this.addUser=this.addUser.bind(this)
        
    }


    addUser (users)  {
        console.log(this.state)
        axios.post(`/api/users`, this.state).then((res)=>{
            this.props.set("users", res.data) 
            console.log
            
        })
    }
    updateUser () {
        let id = (this.props.match.id)
        axios.put(`/api/users/${id}`).then((res)=>{
            console.log(res)

        })
    }

    deleteUser (users) {
        axios.delete (`/api/users${this.props.match.id}`).then((resp)=>{
            users.splice(users.id)
            console.log(users)
        })

    }
    
    
    pushUser () {
        var body = {
            id:this.state.id,
            name:this.state.name,
            email:this.state.email
        }
        axios.post('/api/users',body).then((res)=> {
            
            let user = res.data;
            console.log(user)
            
            return user
        })
        
        
    }
    handleChange(e) {
        let{value, name} = e.target
        this.setState(_=>{
            let newState={};
            newState[name]=value
            console.log(newState)
            return newState;

        })
    }
    submit(e){
        e.preventDefault();
        if (this.state.name){
                this.addUser()
            }
        }

    render () {
        return (
            <div>
                <h1 className="candidate">Add Candidate</h1>
                
                <form className="formcontent" onSubmit={(e)=>this.submit(e)}>
                    
                
                    <div className="container">
                
                    
                        <div className="newser_userinput">
                            <label>ID :</label>
                            <input type='text' name='id' value={this.state.id}onChange={
                                e=>{this.handleChange(e)}}  placeholder="Optional"/>
                        </div>
                        <div className="newser_userinput">
                            <label>Name :</label>
                            <input type='text' name = 'name' value={this.state.name}onChange={
                                e=>{this.handleChange(e)}} placeholder="Required"/>
                        </div>
                        <div className="newser_userinput">
                            <label>Email :</label>
                            <input type='text' name='email' value={this.state.email} onChange={
                                e=>this.handleChange(e)} placeholder="Required"/>
                        </div>
                    
                        
                            <button type="submit">Save</button>
                            {/* <button className="edit"onClick={()=>this.setState({editting:!this.state.editing, email})}>Edit</button> */}
                        
                        
                    
                        </div>
                </form>
                {/* <button className="delete" onClick={(e) => deleteUser()}>Delete</button> */}
                {/* <div className="userdisplay"> {this.state.users.map((user)=>(<User id={user.id} key={user.id} name={user.name} email={user.email} update={updateUser} remove={removeUser}/>
                ))
                }
                    </div> */}
                {/* <User user={this.state}/>  */}
            </div>
        )
    } 
}
