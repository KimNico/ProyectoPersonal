const {Router} = require("express")

const empresaRoute = Router()

empresaRoute.post('/')
empresaRoute.put('/')
empresaRoute.get('/')
empresaRoute.delete('/')
empresaRoute.get('/:id')


module.exports = empresaRoute;

