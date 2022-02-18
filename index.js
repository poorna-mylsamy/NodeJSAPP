const express = require('express');
const db = require('./config/db_conection');
const morgan = require('morgan');
const body_parser = require('body-parser');
const userRouter = require('./model/users');
const cors = require('cors');


const app =  express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
app.use(body_parser.json());
app.use('/users',userRouter)

app.get('/',(req,res)=>{
    res.end("Welcome!!!");
})

//Listen Port
app.listen(5000,()=>{
    console.log("Server started on 5000");
})