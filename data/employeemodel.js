const mongoose=require('mongoose');

// mongoose.model=new mongoose.Schema({
//     name:String,
//     age:Number
// })
const schema=new mongoose.Schema({
    name:{require:true,type:String},
    age:{require:true,type:Number}
})

module.exports=mongoose.model('newEmployee',schema)