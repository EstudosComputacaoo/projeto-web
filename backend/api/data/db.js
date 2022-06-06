

const DB_PASSWORD = 'Fies2014'
const DB_USER = 'Rodolfo'
const DB_NAME = 'bd01'
const mongoose = require('mongoose')

async function main(){
    try {
        await mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@facens.vjuyq.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`)
        console.log('DB is running')
    }
    catch(error){
        console.error(`Error to connect do DB: ${error}`)
    }
}

main()

module.exports = mongoose

