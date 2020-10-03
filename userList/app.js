'use strict'

//Server constants.

const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

//BBDD connection.
const mongoDB = require( './controllers/mongoose' );

//Parser responses to JSON files to work with our BBDDs.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

//Charge routes
const routes = require ( './routes/routes' );
app.use('/', routes);

//Charge methods
const methods = require( './controllers/methods_BBDD' );



app.listen(port, ()=> {
    console.log(`Servidor operativo, puerto ${port}`);

});



