const express = require('express');
const app=express();


app.get('/',(req,res)=>{
    res.send("Hello My First Backend")
})

app.listen(6000,()=>{
    console.log('Server listening on port 6000')
})