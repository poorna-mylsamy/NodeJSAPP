const mongoose = require('mongoose');
require('dotenv/config');


//DB connecttion
mongoose.connect(process.env.MYDB_CONNECTION,(err)=>{
    if(err){
        console.log("DB not connected");
    }
    console.log("DB connected successfully!")
})