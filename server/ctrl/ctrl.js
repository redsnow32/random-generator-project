let users = [];
let id = 0;

module.exports = {
    create: (req, res) => {
        const{name, email} = req.body
        id++
        users.push({id,name, email})
        name: req.body.name;
        email: req.body.email;
        res.status(200).json(users)
    },
    read:(req,res) => {
        res.status(200).json(users);
    }
}