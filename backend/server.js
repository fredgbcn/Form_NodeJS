const express = require('express');
const app = express();

app.get('/api', (req, res)=>{
    res.json({"users": ["userOne", "userTwo", "userThree", "userFour"]})
})
app.get('/login', (req, res) =>{
    res.render('login.ejs')
})
app.get('/register', (req, res) =>{
    res.render('register.ejs')
})
app.listen(3001, () =>{
    console.log("Hey it works")
})