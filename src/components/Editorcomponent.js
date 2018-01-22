import React, {Component} from 'react';
import axios from 'axios'



export default class  extends Component {
    constructor (props) {
        super(props) 
        this.state={
            editting:false,
            id:this.props.id,
            name:this.props.name,
            email:this.props.email

        }
    }
    componentDidMount () {
        axios.get(`http://localhost:3232/api/users`).then((res)=>{
            this.setState({users:res.data})
            console.log(res.data)
      })
    }
    render () {
   
        return (
            <div className="Edit">
                <hi>Employee Editor</hi>
            </div>
        )
    }
}