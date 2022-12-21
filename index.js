const express=require('express')
const app=express();
const feedRoutes=require("./routes/feed")

const port=process.env.PORT || 3000
app.use("/feed",feedRoutes)

app.listen(port);