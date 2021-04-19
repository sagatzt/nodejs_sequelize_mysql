const Sequelize = require('sequelize')
// mysql://pepe:1234@localhost:3306/sequelizeDB

const connection=new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)

module.exports=connection