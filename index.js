const express = require('express')
const path=require('path')
const cors= require('cors')
const router= require('./config/routes')
const setupDB=require('./config/database')
const {userRouter}= require('./app/controllers/UserController')
setupDB()

const app=express()
const port=process.env.port || 3035

app.use(express.json())
app.use(cors())
app.use('/users', userRouter)


app.use('/',router)
// app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname + "/client/build/index.html"))
})

app.listen(port,()=>{
    console.log('listening on port',port)
})