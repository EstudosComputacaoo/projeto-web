const mongoose = require('../data/db')
const { Schema } = mongoose

const User = mongoose.model(
    'User',
    new Schema({
        nome: String,
        email: String,
        password: String
    })
)

module.exports = User