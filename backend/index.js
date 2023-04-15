// Include Express 
const express = require('express');
const app=express();

// Routes
app.get('/About',(req,res)=>{
    res.render("Hello My First Backend")
})
// Router
app.get('/home',(req,res)=>{
    res.send("harkirat Singh")
})
app.post('/Contact/submit',(req,res)=>{

})
// Serve all the time and takes the request from the frontend
app.listen(8080,()=>{
    console.log('Server listening on port 8080')
})