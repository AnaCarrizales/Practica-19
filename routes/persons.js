//generamos instancia del router
//inyectamos dependecias
const express = require('express');
const router = express.Router();
const mongoose = require('../node_modules/mongoose');
let Person = require('../models/person');


//agregamos la ruta /persons por el método GET
router.get('/persons', function(req,res,next){
    Person.find(function (err,persons) {
        res.json(persons);
    })
})

//Exportamos el ruteador
module.exports=router;