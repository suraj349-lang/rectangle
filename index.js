const express=require('express')
const app=express();

const port=process.env.PORT || 3000
app.get("/",(erq,res,next)=>{
    res.send("Hello world")
})
app.listen(port,()=>{
    console.log("listening on 3000")
});