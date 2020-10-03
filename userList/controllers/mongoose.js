'use strict'

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
const BBDD = "usuarios";
const URL = "localhost:27017";

//Deprecation warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);
mongoose.set('useFindAndModify', false);



mongoose.connect(`mongodb://${URL}/${BBDD}`)
    .then( ()=> {
        console.log(`Conexión relizada con éxito a la BBDD: "${BBDD}" en la dirección: "${URL}" `);
    })
    .catch (err => { console.log(err) });
    

module.exports = mongoose;