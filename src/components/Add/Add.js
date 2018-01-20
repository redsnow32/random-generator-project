import React, { Component } from 'react';
// import axios from 'axios';
import './Add.css'


export default class Add extends Component {
    constructor (props) {
        super(props)
        this.state ={
            candidate:{}
        }
        this.bind
    }  
    // addUser () {
    //     let body = {
    //         id:'',
    //         name:'',
    //         email: ''
    //     }
    //     axios.post('/api/users', body).then((res)=> {
    //         let user = res.body;
    //         console.log(res.body)
    //         this.props.users.push(`/users${id}`)
    //     })
    // }
    
    render () {
        return (
            <div className="content">
                <div className="container">
                    <div className="newser_userinput">
                        <label>ID</label>
                        <input type='text'></input>
                    </div>
                    <div className="newser_userinput">
                        <label>Name</label>
                        <input type='text'></input>
                    </div>
                    <div className="newser_userinput">
                        <label>Email</label>
                        <input type='text'></input>
                        <button>Click</button>
                    </div>
                </div>
            </div>
        )
    } 
}