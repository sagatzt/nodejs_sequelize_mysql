const express = require('express')
const app = express()
const rtMain = require('./routers/rtMain')

//middlewares
app.use(express.json())

//enrutador principal
app.use('/',rtMain)

 
//arrancamos el servidor:
app.listen(8081,(err)=>{
    console.log('Server run on port 8081')
})