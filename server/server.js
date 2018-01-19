const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    app=express();
    port=3232;

const users = require('./users.js')
users.push({name:'Derek, id: 4'})
// console.log(users)

app.use(bodyParser.json());

app.listen(port, ()=> {
    console.log(`Listening on port ${port}`)
});



