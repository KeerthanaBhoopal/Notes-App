const mongoose=require('mongoose')

const Schema=mongoose.Schema
const noteSchema=new Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    category:{
        type:Schema.Types.ObjectId,
        ref:'Category',
        required:true
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:'User'
    }
    // noteimage:{
    //     type:String,
    //     required:true
    // }
    //add 
})

const Note=mongoose.model('Note',noteSchema)
module.exports=Note
