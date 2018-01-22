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
            employee:null,

        }
    }
    componentDidMount () {
        axios.get(`http://localhost:3232/api/users`).then((res)=>{
            this.setState({users:res.data})
            console.log(res.data)
      })
    
    }
    handleChange(e) {
        this.setState({email:e.target.value, name:this.target.value})
    }
    edit(e) {
        const{id}=this.props
        const{email,name} = this.state
        console.log(this.props)

    }
            
    render () {
        // console.log(this.props)
        return (
            
            <div className="Edit">
                <h1>UserEditor</h1>
                 {this.state.employee}
                {/* <button className="edit"onClick={()=>this.setState({editting:!this.state.editing, email})}>Edit</button>
                <button className="delete"onClick={() => remove(id)}>Delete</button>  */}

            </div>
        )
    }
}