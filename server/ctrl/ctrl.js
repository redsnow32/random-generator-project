let users = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const{name, email} = req.body
        id++
        if(req.body.id) {
            id=parseInt(req.body.id)
        } else {
            id=id++
        }
        
        users.push({id,name, email})
        name: req.body.name;
        email: req.body.email;
        console.log(req.body)
        res.status(200).json(users)
    },
    read:(req,res) => {
        res.status(200).json(users);
    },
    update: (req,res)=>{
        const updateUID = req.params.id;
        let index = users.findIndex(user=>user.id == updateUID)

        users[index] = {
            id: users[index].id,
            name:req.body.name || users[index].name,
            email:req.body.email || users[index].email
        };
        res.status(200).json(users)
    },
    delete: (req, res) => {
        const deleteUID = req.params.id;
        userID = users.findIndex(user=> user.id == deleteUID);
        users.splice(userID,1)
        res.status(200).json(users)
        
    }
}