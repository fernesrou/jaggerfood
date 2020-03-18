const express = require('express');
const router = express.Router();




const indexController = require('../controllers/index');

router.get('/', indexController.index);

router.get('/login', indexController.login);
//router.get('/login/:userId', indexController.login); ----> :userId o el nombre q nos guste, es una variable, acepta un parametro
//               res.send(`User ${req.params.userId}`)
// parametro next ----> next()       ejecuta codigo de la funcion y luego procede con las demas funciones

router.get('/products', indexController.productos);


router.post('/newproduct', indexController.nuevoproducto);

module.exports = router;
