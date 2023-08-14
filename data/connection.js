const mongoose=require('mongoose');
require('dotenv').config();
let db_url=process.env.db_url;

const connect=function(){
    mongoose.connect(db_url).then((value)=>{
        console.log("db connected successfully")
    })
}

module.exports=connect;