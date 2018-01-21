import React, { Component } from 'react';
import axios from 'axios';
import './Add.css'
import Edit from '../Edit/Edit'
// import Display from '../Display/Display'


export default class Add extends Component {
    constructor () {
        super()
        this.state ={
            id:'',
            name: '',
            email:''
        }
        // this.bind.addUser = this.bind.addUser.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    
    componentDidMount () {
      axios.get('/api/users').then((res)=>{
          console.log(res.data)
          this.setState({
              id:res.data.id,
              name:res.data.name,
              email:res.data.email
          })
      })
    }


    addUser () {
        let body = {
            name:'',
            email: ''
        }
        axios.post('/api/users', body).then((res)=> {
            
            // let user = res.body;
            // console.log(res.data)
            // this.state.history.push(`/users${res.data.id}`)
        })
    }
    handleChange(e){
        let { value, name } = e.target
        this.setState(_=>{
            let newState={}
            newState[name]=value
            return newState
        })
    }
    submit(e){
        e.preventDefault();
        if (this.state.name){
            if (this.props.match.params.hasOwnProperty('id')){
                this.updateUser()
            } else {
                this.addUser()
            }
        }
    }
    
    render () {
        return (
            <div>
                <h1 className="candidate">Add Candidate</h1>
                <form className="formcontent">
                
                    <div className="container">
                
                    
                        <div className="newser_userinput">
                            <label>ID :</label>
                            <input name='id' value={this.state.id}onChange={
                                (e)=>{this.handleChange(e)}} type='text'/>
                        </div>
                        <div className="newser_userinput">
                            <label>Name :</label>
                            <input name = 'name' value={this.state.name}onChange={
                                (e)=>{this.handleChange(e)}} type='text'/>
                        </div>
                        <div className="newser_userinput">
                            <label>Email :</label>
                            <input name='email' value={this.state.email} onChange={
                                (e)=>this.handleChange(e)} type='text'/>
                        </div>
                        <div className="Button"></div>
                        
                        <button onClick={(e)=>{e=>this.submit(e)}}>Save</button>
                        <Edit /> 
                        </div>
                    <div className="userdisplay">
                                        
                    </div>
                </form>
            </div>
        )
    } 
}