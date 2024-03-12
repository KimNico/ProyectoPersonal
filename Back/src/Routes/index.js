const {Router} = require("express")

const route = Router()

const aplicacionRoute = require('./AplicacionRoute')
const categoriaRoute = require('./CategoriaRoute')
const empresaroute = require('./EmpresaRoute')
const publicacionroute = require ('./PublicacionRoute')

route.use('/aplicacion',aplicacionRoute)
route.use('/categoria',categoriaRoute)
route.use('/empresa',empresaroute)
route.use('/publicacion',publicacionroute)