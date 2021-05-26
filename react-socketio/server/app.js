const express = require('express')
const logger = require('morgan') //chạy trước (middlewares) 
const mongoClient = require('mongoose')
const bodyParser = require('body-parser')

mongoClient.connect('mongodb://localhost:27017/testdb',{
    useNewUrlParser:true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('okkkkkkkkkkk')
}).catch((error)=>{
    console.error(`nooooooooooo ${error}`)
})
const app = express()

//Middlewares
app.use(logger('dev'))

//Routes
const userRoute= require('./routes/User')
app.use(bodyParser.json())

app.use('/users',userRoute)

//Route
// app.get('/',(req,res,next)=>{
//     return res.status(200).json({
//         message:'server is okvvcvc'
//     })
// })

//lối thì chạy hàm này
app.use((req,res,next)=>{
    const err = new Error('Not Found')
    err.status = 404
    next(err)
})
//lỗi ko xác định trả về 500
app.use((err,req,res,next)=>{
    const error = app.get('env') === 'development' ? err : {}
    const status = err.status || 500

    //response to client trả về json lỗi
    return res.status(status).isnn({
        error:{
            message:error.message
        }
    })
})

const port = app.get('port') || 3000
app.listen(port, ()=>console.log(`Server is run on port ${port}`))
