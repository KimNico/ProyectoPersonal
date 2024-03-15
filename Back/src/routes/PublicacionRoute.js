const {Router} = require("express")
const {getPublicacionesController} = require("../controllers/PublicacionController")

const publicacionRoute = Router()

publicacionRoute.post('/')
publicacionRoute.put('/')
publicacionRoute.get('/',getPublicacionesController)
publicacionRoute.delete('/')
publicacionRoute.get('/:id')


module.exports = publicacionRoute;

