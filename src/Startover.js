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
        // this.handleChange=this.handleChange.bind(this);
        // this.addUser=this.addUser.bind(this)
        
    }
    // componentDidMount () {
    //     axios.get(`http://localhost:3232/api/users`).then((res)=>{
    //         this.setState({users:res.data})
    //         // console.log(res.data)
    //   })
    // }
    componentDidMount(){
        let id = this.props.id
        if(id >= 0){
             axios.get(`/api/users/${id}`).then(res=>{
                 this.setState({
                     id: res.data.id || id,
                     name: res.data.name,
                     email:res.data.email
                 })
             })
        }
    }

    componentWillReceiveProps(newProps){
        if (newProps.match.params.hasOwnProperty('id')){
            let id = newProps.match.params.id    
            axios.get(`/api/users/${id}`).then(res=>{
                this.setState({
                    id: res.data.id || id,
                    name: res.data.name,
                    email:res.data.email
                })
            })
        } else {
            this.setState({
                id: null,
                name: '',
                email: '',
                
            })
        }
    }
    // addUser ()  {
    //     axios.post(`/api/users/`, this.state).then((res)=>{
    //         let user = res.data;
    //         this.setState({users:res.data})
    //         console.log(res.data)
    //         return user;
    //     })
    // }
    updateUser () {
        let id = (this.props.match.id)
        axios.put(`/api/users/${id}`).then((res)=>{
            console.log(res)

        })
    }
    deleteUser () {
        axios.delete (`/api/users${this.props.match.id}`).then((resp)=>{
            this.props.history.push(`users`)
        })

    }
    
    
    addUser () {
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
            // console.log(newState)
            return newState;

        })
    }
    submit(e){
        e.preventDefault();
        if (this.state.id){
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
                
                <div className="formcontent" onSubmit={(e)=>this.submit(e)}>
                    
                
                    <div className="container">
                
                    
                        <div className="newser_userinput">
                            <label>ID :</label>
                            <input name='id' value={this.state.id}onChange={
                                e=>{this.handleChange(e)}} type='text' placeholder="Optional"/>
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
                    
                        {
                            this.state>=0
                            ?
                            <span>
                                <button type="submit">Edit</button>
                                <button className="delete">Delete</button>
                            </span>
                            :
                            <button type="submit">Save</button>
                        }
                    
                        </div>
                </div>
                {/* <div className="userdisplay"> {this.state.users.map((user)=>(<User id={user.id} key={user.id} name={user.name} email={user.email} update={updateUser} remove={removeUser}/>
                ))
                }
                    </div> */}
                <User user={this.state}/> 
                <button type="submit">Edit</button>
                                <button className="delete">Delete</button>
            </div>
        )
    } 
}


--------------------------------------------------------------------

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

------------------------------------------------------------------------------------
<div className="newser_userinput">
                            <label>Name :</label>
                            <input type='text' name='name' value={this.state.name} onChange={
                                e => { this.handleChange(e) }} placeholder="Required" />
                        </div>
                        <div className="newser_userinput">
                            <label>Email :</label>
                            <input type='text' name='email' value={this.state.email} onChange={
                                e => this.handleChange(e)} placeholder="Required" />
                        </div>
                        {/* <button className="submit" onClick={(e) => this.submit(e)}>Add User</button> */}
                        <button className="edit" onClick={() => this.updateUser}>Edit</button>
                        <button className="delete" onClick={() => this.deleteUser}>Delete</button>

                                        {/* <button className="delete" onClick={(e) => this.deleteUser()}>Delete</button> */}
