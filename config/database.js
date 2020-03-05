const mongoose=require('mongoose')

mongoose.Promise=global.Promise
const CONNECTION_URI= process.env.MONGODB_URI ||  "mongodb+srv://cluster0-yepjy.mongodb.net/test" 
const setUpDB=()=>{
mongoose.connect(CONNECTION_URI,{ useNewUrlParser: true,useUnifiedTopology: true})
.then(()=>{
    console.log('connected to db')
})
.catch((err)=>{
    console.log('error',err)
})

}
module.exports=setUpDB

//mongo "mongodb+srv://cluster0-yepjy.mongodb.net/test"  --username keerDB
//"mongodb://localhost:27017/note-app"