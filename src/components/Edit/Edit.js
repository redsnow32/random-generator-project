import React, {Component} from 'react';
import axios from 'axios'
import './Edit.css'


export default class Edit extends Component {
    constructor (props) {
        super(props) 
        this.state={

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
    // componentWillReceiveProps(newProps) {
    //     if(newProps.match.params.hasOwnProperty('id')){
    //         let userID=newProps.match.params.id
    //         axios.get( `/api/users${id}`).then((res)=>{
    //             this.setState({
    //                 id:id,
    //                 name:res.data.name,
    //                 email:res.data.email
    //             })
    //         })
    //     } else {
    //         this.setState({
    //             id:null,
    //             name:'',
    //             email:''
    //         })
    //     }
    // }

    // updateUser () {
    //     let id = this.props.match.id
    //     axios.put(`/api/users/${id}`).then((res)=>{
    //         var user = res.data
    //     })
    // }
    // deleteUser () {
    //     axios.delete(`/api/users${this.props.match.params.id}`).then((res)=>{
            
    //     })
    // }
            
    render () {
        // console.log(this.props)
        return (
            <div className="Edit">
                <button>Edit</button>
                
            </div>
        )
    }
}