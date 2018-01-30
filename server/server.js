const express = require('express');
const ctrl = require('./ctrl/ctrl');
const bodyParser = require('body-parser');
const cors = require('cors');
const app=express();
const port=3232;


app.use(bodyParser.json());

app.post('/api/users', ctrl.create)
app.get('/api/users', ctrl.read)
app.put('/api/user/:id',ctrl.update)
app.delete('/api/users/:id',ctrl.delete)
// app.get('http://worldclockapi.com/api/json/est/now',ctrl.read);


app.listen(port, ()=> {
    console.log(`Listening on port ${port}`);
});


