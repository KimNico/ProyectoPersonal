const {Router} = require("express")

const publicacionRoute = Router()

publicacionRoute.post('/')
publicacionRoute.put('/')
publicacionRoute.get('/')
publicacionRoute.delete('/')
publicacionRoute.get('/:id')


module.exports = publicacionRoute;

