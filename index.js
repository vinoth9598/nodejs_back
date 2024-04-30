// import mongoose
const mongoose=require('mongoose');

// import config
const config=require('./utils/config')

// set the strict query option to false to allow for querying by id
mongoose.set("strictQuery",false);

// import app
const app=require('./app');


console.log('Connecting to Mongodb..',config.MONGODB_URI)
mongoose.connect(config.MONGODB_URI)
   .then(()=>{
        console.log("Connected to Mongodb...,");
        app.listen(config.PORT,()=>{
            console.log(`server running on PORT ${config.PORT}`)
        })
   })
   .catch((error)=>{
        console.log("Error",error.message);
   })