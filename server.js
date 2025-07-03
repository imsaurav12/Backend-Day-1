// s1- Create a Folder
// s2-go to that Folder
// s3-npm init -y   --------> Isse package.json aa jayegi
// s4-npm i express -----> isse node module wala folder aayega
// s5-create Server.js

const express = require('express');  // is prakar se express ka instance bana liye
const app = express();  // express ka single 

const bodyParser = require('body-parser');
app.use(bodyParser.json()); 

app.listen(3000,() => {
    console.log("Server started at port no 3000");
});

app.get('/',(request,response) => {
    response.send("Hello Jee, Kaise ho sare")
})

app.post('/api/cars', (request,response) => {
    const {name, brand} = request.body;
    console.log(name);
    console.log(brand);
    response.send(`Cars details submitted Successfully! `)
})

//Connecting server through DB using Mongoose

const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/myDatabase')
.then(console.log('Connected to DB successful!'))
.catch((error) => {
    console.log('Connection to DB Failed!')
})