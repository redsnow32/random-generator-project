import React, {Component} from 'react';
import axios from 'axios'
import './Edit.css'


export default class Edit extends Component {
    constructor (props) {
        super(props) 
        this.state={
            editting:false,
            id:this.props.id,
            name:this.props.name,
            email:this.props.email,
            user:null,
            originalUser:null,
            notModified:true

        }
    }
    // componentDidMount () {
    //     axios.get(`/api/users`).then((res)=>{
    //         console.log(res)
    //         this.setState({users:res.data})
            
    //   })
    
    // }
    componentWillReceiveProps (props) {
        this.setState({ user: Object.assign({}, props.selected), originalUser: props.selected });

    }    
    // updateUser (props) {
        // console.log(props.selected)
    //     let selected = (props.selected)
    //     axios.put(`/api/users/${selected}`).then((res)=>{

    //     })
    // } 
    edit(e) {
        // console.log(this.props)
        if(this.state.notModified){
            this.setState({notModified:false})
        }
        // var userCopy = Object.assign({},this.state.user)
        // userCopy[prop]=val
        // this.setState({user:userCopy})
        
    }  
    render () {
        return (
            
            <div className="Edit">
                <h1>UserEditor</h1>
                 {this.state.name}
                {/* <button className="edit"onClick={()=>this.setState({editting:!this.state.editing, email})}>Edit</button>
                <button className="delete"onClick={() => remove(id)}>Delete</button>  */}

            </div>
        )
    }
}