const express=require("express");
const router=express.Router();
const controllers=require("../controllers/feed")

router.get("/posts",controllers.getPosts);


module.exports=router;