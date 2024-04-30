// create a usersRouter
const usersRouter=require('express').Router();

// import the users

const User=require('../model/users');

// import the bcrypt
const bcrypt=require('bcrypt');


// to create a new user or register a new user
usersRouter.post('/',async (req,res)=>{
    const {username,name,password}=req.body;

    const passwordHash=await bcrypt.hash(password,8);

    const user=new User({
        username,
        name,
        passwordHash
    });

    const savedUser= await user.save();

    res.json(savedUser);
});



module.exports=usersRouter;