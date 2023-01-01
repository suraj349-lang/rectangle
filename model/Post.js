
const Mongoose=require('mongoose');
const postschema=new Mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    }
})
module.exports=Mongoose.model("Post",postschema)