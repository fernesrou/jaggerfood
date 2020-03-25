const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const { Schema } = mongoose;

new Schema({
    nombre: { type: String, required: true },
    email: { type: String, required: true},
    date: { type: Date, default: Date.now}, 
});



router.get('/signin', (req, res)=> {
    const { nombre, contraseña } = req.body;

});



module.exports = router;