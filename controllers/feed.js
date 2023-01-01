const Post=require('../model/Post')

exports.getPosts=(req,res,next)=>{

    res.status(200).json(Post("Suraj","This is the content"))

};

exports.createPost=(req,res,next)=>{
    const title=req.body.title
    const content=req.body.content
    res.status(201).json({
        message:"post created successfully",
        post:{id:new Date().toISOString(),title:title,content:content}
    })
}