const {Router} = require("express")

const aplicacionRoute = Router()

aplicacionRoute.post('/')
aplicacionRoute.put('/')
aplicacionRoute.get('/')
aplicacionRoute.delete('/')
aplicacionRoute.get('/:id')


module.exports = aplicacionRoute;

