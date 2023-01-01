const Post=require('../model/Post')

exports.getPosts=(req,res,next)=>{
    const post=new Post({
        title:"Suraj",
        content:"This is the content"
    })

    res.status(200).json({post})

};

exports.createPost=(req,res,next)=>{
    const title=req.body.title
    const content=req.body.content
    res.status(201).json({
        message:"post created successfully",
        post:{id:new Date().toISOString(),title:title,content:content}
    })
}