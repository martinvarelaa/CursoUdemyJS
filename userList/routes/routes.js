'use strict'

const express = require( 'express' );
const router = express.Router();

const methods = require( '../controllers/methods_BBDD' );

router.get( '/test', methods.test );
router.post( '/addUser', methods.save );
router.get( '/getUser/:name', methods.list );
router.get( '/getAllUsers', methods.listAll );
router.put( '/updateUser/:DNI' , methods.update);
router.delete( '/deleteUser/:DNI' , methods.delete);

//Poniendo "?" después de cada parámetro se puede hacer opcional!

module.exports = router;


