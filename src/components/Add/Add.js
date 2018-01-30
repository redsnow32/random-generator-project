import React, { Component } from 'react';
import axios from 'axios';
import './Add.css'


export default class Add extends Component {
    constructor (props) {
        super(props)
        this.state ={
            id:'',
            name:'',
            email:''


        }
        this.handleChange=this.handleChange.bind(this)
        this.submit=this.submit.bind(this)
        this.addUser=this.addUser.bind(this)
        
    }
 
    addUser ()  {
        axios.post(`/api/users`, this.state).then((res)=>{
            this.props.set("users", res.data)    
        })
    }

 
    
    handleChange(e) {
        let{value, name} = e.target
        this.setState(_=>{
            let newState={};
            newState[name]=value
            // console.log(newState)
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
            <div className='userForm'>
                <h1 className="candidate">Add Candidate</h1>
                
                <form className="formcontent" >
                    
                
                    <div className="container">
                
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
                    
                        
                            <button className="submit" onClick={(e)=>this.submit(e)}>Add User</button>
                        </div>
                </form>
            </div>
        )
    } 
}
