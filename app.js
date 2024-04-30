const express=require('express');
const cors=require('cors');
const app=express();
const usersRouter=require('./controller/userRouter');


app.use(express.json());

// middleware for cors
app.use(cors());


// import endpoints
app.use('/api/users',usersRouter);


module.exports=app;