require('dotenv').config()
const express = require('express')
const app = express()
const rtMain = require('./routers/rtMain')
const DB = require('./models')


//middlewares
app.use(express.json())

//enrutador principal
app.use('/',rtMain)

//configuracion de la BD
DB.authenticate()
    .then(()=>console.log("BD MySQL arrancado!"))
    .catch(err=>console.log(":( Error de conexión a mysql",err))

//arrancamos el servidor:
app.listen(8081,(err)=>{
    console.log('Server run on port 8081')
})