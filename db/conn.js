const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('aluguel', 'root', '',{
    host: 'localhost',
    dialect: 'mysql'
})

try{
    sequelize.authenticate()
    console.log('conectado')
}catch(error){
    console.log(`Erro: ${error}`)
}

module.exports = sequelize