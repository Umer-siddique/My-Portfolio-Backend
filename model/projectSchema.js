const mongoose=require("mongoose")

const Schema=mongoose.Schema

const projectSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    technology:{
        type:Array,
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    projectUrl:{
        type:String,
        required:true
    },
    projectImage:{
        type:String,
        default:""
    }

},{timestamps:true})

module.exports=mongoose.model("project",projectSchema)