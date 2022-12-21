const express=require('express')
const app=express();
app.get("/",(erq,res,next)=>{
    res.send("Hello world")
})
app.listen(3000,()=>{
    console.log("listening on 3000")
});