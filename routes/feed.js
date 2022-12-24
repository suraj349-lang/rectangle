const express=require("express");
const router=express.Router();
const controllers=require("../controllers/feed")

router.get("/posts",controllers.getPosts);
router.post("/post",controllers.createPost)


module.exports=router;