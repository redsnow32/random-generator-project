const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app=express();
    port=3232;

const ctrl = require('./ctrl/ctrl')
// users.push({name:'Derek, id: 4'})
// console.log(users)
app.use(bodyParser.json());

app.post(`/api/users`, ctrl.create)
app.get(`/api/users`, ctrl.read)

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});
console.log(users)

