const {Router} = require("express")
const {getUsersController} = require("../controllers/UserController")

const userRoute = Router()

userRoute.post('/')
userRoute.put('/')
userRoute.get('/',getUsersController)
userRoute.delete('/')
userRoute.get('/:id')


module.exports = userRoute;

