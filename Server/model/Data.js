const mongoose= require('mongoose')
const Schema= mongoose.Schema


const ProjectSchema= new Schema({
    projecttitle: {
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    imageUrl: { 
        type: String, 
        required: true 
    },
    imageData: { 
        type: Buffer, 
        required: false
    }
},{timestamps:true})
//we define model here
module.exports= mongoose.model('Pdata',ProjectSchema)