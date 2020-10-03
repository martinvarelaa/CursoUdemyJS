'use strict'

const User = require( '../models/user' );

var methods = {
    test: function(req, res){
        return res.status(200).send({ message: 'Test de prueba'});

    },
    save: function(req, res){
        let user = new User();

        var params = req.body;

        //Asign params values to the empty user model fields.
        user.name = params.name;
        user.surname = params.surname;
        user.bornOn = params.bornOn;
        user.age = params.age;
        user.DNI = params.DNI;
        
        user.save((err, userAdded) =>{

            if (err) return res.status(500).send({message: "Error al guardar el usuario!"});
            else if (!userAdded) return res.status(404).send({message: "No se podido guardar el usuario!"});
            else {
                res.status(200).send({
                message: "Usario guardado con éxito!",
                user: userAdded,
                });
            };

        });
        

    },

    list: function(req, res) {
        var name = req.params.name;
        
        if(name == null) {
            res.status(404).send({message: "No se ha identificado el nombre sobre el que buscar!"});
        }

        User.find({"name" : name}, (err, user)=>{
            if (err) return res.status(500).send({message: "Error al devolver los datos!"}); 
            else if(!user) return res.status(404).send({message: `No se ha encontrado un usuario con el nombre: ${name} `}); 
            else {
                return res.status(200).send({user});
                
            }
        });
    },
    listAll: function(req, res) {
        
        User.find({}, (err, user)=>{
            if (err) return res.status(500).send({message: "Error al devolver los datos!"}); 
            else if(!user) return res.status(404).send({message:"No hay usuarios que mostar!"}); 
            else {
                return res.status(200).send({user});
                
            }
        });
    },
    
    update: function(req, res){

        var dni = req.params.DNI;
        var newUser = req.body;
        

        console.log(dni, newUser);
        
        User.findOneAndUpdate({"DNI": dni}, newUser, (err, user)=>{
            if (err) return res.status(500).send({message: "Error al actualizar los datos!"}); 
            else if(!user) return res.status(404).send({message:"No hay usuarios que actualizar!"}); 
            else {
                return res.status(200).send({user});
                
            }
        });
    },

    delete: function (req, res){

        var dni = req.params.DNI;

        User.findOneAndDelete({"DNI": dni}, (err, user)=>{
            if (err) return res.status(500).send({message: "Error al eliminar archivo!"}); 
            else if(!user) return res.status(404).send({message:"No hay usuarios que eliminar!"}); 
            else {
                return res.status(200).send({user});
                
            }
        });
    }
};

module.exports = methods;


//TODO:
//1. Agrupar la comprobación de la response en un método
//2. Eliminar las variables como dni o nombre e introducir su valor asignado directamente en el lugar en el
//que se vayan a usar