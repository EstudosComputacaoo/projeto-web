const mongoose = require('../data/db')
const { Schema } = mongoose

const Students = mongoose.model(
    'students',
    new Schema({
        nome: {type: String, required: true},
        grade: { type: Number, required: true},
        RA: {type: Number, required: false}
    })
)

module.exports = Students