const express = require('express');
const adding = require('./add');
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser());


//Assignment 1
app.get("/", (req, res) => {
    res.send("<h1>Hello, My Server!</h1>");
})

//Assignment 2
app.get("/getData", (req, res) => {
    const {number} = req.query;
    const result = adding.add(number);
    const reg = /^[0-9]+$/g;

    if(number == null){
        res.send("<h1>Lack of Parameter</h1>");
    } else if(!reg.test(number)){
        res.send("<h1>Wrong Parameter</h1>");
    } else{
        res.send(`<h1>${result}</h1>`);
    }
});

//Assignment 3
app.use(express.static("public"));


//Assignment 4
app.get("/myName", (req, res) => {
    res.sendFile(__dirname + "/myName.html");  
    console.log(req.cookies.name);
})

app.get("/trackName", (req, res) => {
    let username = req.query;
    res.cookie("name", username.name);
    res.redirect("myName");
})




app.listen(3000, () => {
    console.log("The server is running on localhost:3000!");
});

