let users = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        id++
        let newUser={
            id:id,
            name:req.body.name,
            email:req.body.email
        }
        
        users.push(newUser)
        // console.log(users)
        res.status(200).json(users)
    },
    read:(req,res) => {
        res.status(200).json(users);
    },
    update: (req,res)=>{
        console.log(req.params)
        // const updateUID = req.params;
        // console.log(updateUID)
        let index = users.filter(user=>user.id === +updateUID)
        console.log(index)
        
        // let index = users.findIndex(user=>user.id=== +updateUID)
        users[index] = {
            id: users[index].id,
            name:req.body.name || users[index].name,
            email:req.body.email || users[index].email
        };
        res.status(200).json(users)
    },
    delete: (req, res) => {
        // console.log(req)
        const deleteUID = req.params.userId;
        userID = users.findIndex(user=> user.id === +deleteUID);
        users.splice(userID,1)
        res.status(200).json(users)
        
    }
    
}