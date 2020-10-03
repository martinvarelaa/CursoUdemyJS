'use strict'
const mongoose = require('mongoose');
const mongoose_model = mongoose.Schema;

const model = mongoose_model({
    name: String,
    surname: String,
    bornOn: String, 
    age: Number,
    DNI: String
});

module.exports = mongoose.model('Usuario',model); 
//The first parameter is converted to plural and lowercase letters.