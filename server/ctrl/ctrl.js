module.exports = {
    create (req, res) {
        id++
        let candidate = req.body;
        if(candidate) {
        // id: req.body.id || id;
        name: req.body.name;
        email: req.body.email;
        } 
    res.status(200).json(candidate)
    }
}