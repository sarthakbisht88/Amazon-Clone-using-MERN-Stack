require('dotenv').config();
const express=require('express');

const app=express();
const port=process.env.port;

app.get('/',(req,res)=>{
    res.send('Hello Amazon Clone from server');
});

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);  // backticks used to output variable value in string
})