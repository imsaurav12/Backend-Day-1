// s1- Create a Folder
// s2-go to that Folder
// s3-npm init -y   --------> Isse package.json aa jayegi
// s4-npm i express -----> isse node module wala folder aayega
// s5-create Server.js

const express = require('express');  // is prakar se express ka instance bana liye
const app = express();  // express ka single 

app.listen(3000,() => {
    console.log("Server started at port no 3000");
});

app.get('/',(req,res) => {
    res.send("Hello Jee, Kaise ho sare")
})
