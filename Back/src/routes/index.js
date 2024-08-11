const {Router} = require("express")

const router = Router()

const aplicacionRoute = require('./AplicacionRoute')
const empresaroute = require('./EmpresaRoute')
const publicacionroute = require ('./PublicacionRoute')
const userRoute = require('./UserRoute')

router.use('/aplicacion',aplicacionRoute)
router.use('/empresa',empresaroute)
router.use('/publicacion',publicacionroute)
router.use('/user',userRoute)

module.exports = router;