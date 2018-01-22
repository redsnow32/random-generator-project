import React, {Component} from 'react';
import axios from 'axios'
import './User.css'


export default class User extends Component {
    constructor (props) {
        super (props) 
        this.state={
            user:[]
        }
    }
    // componentWillMount(){
    //     let id = this.props.match.params.id;
    //     axios.get(`/api/user/${id}`).then(res=>{
    //         let user = res.data
    //         this.setState({
    //             user: user
    //         })
    //     })
    // }
    updateUser () {
        let id = this.props.match.id
        axios.put(`/api/users/${id}`).then((res)=>{
            var user = res.data
        })
    }
    deleteUser () {
        axios.delete(`/api/users${this.props.match.params.id}`).then((res)=>{
            
        })
    }
    render () {
        const user = this.props.user
        // console.log(user)
        return (
            <div className="usercontainer">
                {/* <p>User id = {this.props.id}</p> */}
                
            </div>
        )
    }
}