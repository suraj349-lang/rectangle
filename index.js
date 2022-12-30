const express=require('express')
const app=express();
const feedRoutes=require("./routes/feed")

const port=process.env.PORT || 3000
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods",'GET,POST,PUT,PATCH,DELETE')
    res.setHeader("Access-Control-Allow-Headers",'Content-Type,Authorization')
    next();
})
app.use("/feed",feedRoutes)
app.listen(port);