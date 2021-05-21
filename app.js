var express=require('express')
var cool=require('cool-ascii-faces')
var mongoose= require('mongoose')
var cors= require('cors')
var app=express()

require('./models/users.js') 
mongoose.connect('mongodb://localhost:27017/nodefirst',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  })

mongoose.connection.on('connected',()=>{
    console.log('Connection succesful')
})

mongoose.connection.on('Error',()=>{
    console.log('Error code :300')
})

const route = require('./routes/userRoutes.js')

app.use(cors())
app.use('/api',route)

app.get('/',function(req,res){
res.send('Hellow world')

})

app.get('/cool',function(req,res){
    res.send(cool())
})
const port=8000
app.listen(port,()=>{
    console.log(`Server has started at port : ${port}`)
});