const {Router} = require("express")
const {getPublicacionesController} = require("../controllers/PublicacionController")

const publicacionRoute = Router()

publicacionRoute.post('/')
publicacionRoute.put('/"id')
publicacionRoute.get('/',getPublicacionesController)
publicacionRoute.delete('/:id')
publicacionRoute.get('/:id')


module.exports = publicacionRoute;

