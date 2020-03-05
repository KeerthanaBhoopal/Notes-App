const mongoose=require('mongoose')

mongoose.Promise=global.Promise
const CONNECTION_URI= process.env.MONGODB_URI || "mongodb://localhost:27017/note-app"
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