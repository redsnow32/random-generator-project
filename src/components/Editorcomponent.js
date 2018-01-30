// import React, {Component} from 'react';
// import axios from 'axios'



// export default class  extends Component {
//     constructor (props) {
//         super(props) 
//         this.state={
//             editting:false,
//             id:this.props.id,
//             name:this.props.name,
//             email:this.props.email

//         }
//     }
//     componentWillMount (props) {
//         console.log(props)
//         axios.get(`http://localhost:3232/api/users`).then((res)=>{
//             console.log(res.data)
//             this.setState({users:res.data})
            
//       })
//     }
//     render () {
   
//         return (
//             <div className="Edit">
                
//             </div>
//         )
//     }
// }