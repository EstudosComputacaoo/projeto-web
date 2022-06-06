const Students = require('../models/students')

 async function getStudents(){
    return students =  Students.find({}).lean()
}

module.exports = getStudents