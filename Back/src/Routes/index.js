const {Router} = require("express")

const router = Router()

const aplicacionRoute = require('./AplicacionRoute')
const categoriaRoute = require('./CategoriaRoute')
const empresaroute = require('./EmpresaRoute')
const publicacionroute = require ('./PublicacionRoute')

router.use('/aplicacion',aplicacionRoute)
router.use('/categoria',categoriaRoute)
router.use('/empresa',empresaroute)
router.use('/publicacion',publicacionroute)

module.exports = router;