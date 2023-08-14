const express=require('express');
const connect=require('./data/connection');
const router=require("./data/route");
const cors=require("cors");
const app=express();
connect();
app.use(express.json());
app.use("/api",router);
app.use(cors());
const port=3002;
app.listen(port,()=>{
    console.log(`server running successfully at port ${port}`)
});
