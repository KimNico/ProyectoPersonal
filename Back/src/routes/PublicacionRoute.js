const {Router} = require("express")
const {getPublicacionesController, postPublicacionController,deletePublicacionController} = require("../controllers/PublicacionController")

const publicacionRoute = Router()

publicacionRoute.post('/',postPublicacionController)
publicacionRoute.put('/"id')
publicacionRoute.get('/',getPublicacionesController)
publicacionRoute.delete('/:id',deletePublicacionController)
publicacionRoute.get('/:id')


module.exports = publicacionRoute;