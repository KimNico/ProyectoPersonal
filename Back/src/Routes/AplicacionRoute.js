const {Router} = require("express")
const { getAplicacionController} = require('../controllers/AplicacionController')
const aplicacionRoute = Router()

aplicacionRoute.post('/')
aplicacionRoute.put('/')
aplicacionRoute.get('/',getAplicacionController)
aplicacionRoute.delete('/')
aplicacionRoute.get('/:id')


module.exports = aplicacionRoute;

