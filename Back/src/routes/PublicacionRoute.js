const {Router} = require("express")
const {getPublicacionesController, postPublicacionController,deletePublicacionController,putPublicacionController,getByIdPublicacionController} = require("../controllers/PublicacionController")

const publicacionRoute = Router()

publicacionRoute.post('/',postPublicacionController)
publicacionRoute.put('/"id',putPublicacionController)
publicacionRoute.get('/',getPublicacionesController)
publicacionRoute.delete('/:id',deletePublicacionController)
publicacionRoute.get('/:id',getByIdPublicacionController)


module.exports = publicacionRoute;