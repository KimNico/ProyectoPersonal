const {Router} = require("express")
const {getUsersController , getUserByIDController, deleteUserController} = require("../controllers/UserController")

const userRoute = Router()

userRoute.post('/')
userRoute.put('/')
userRoute.get('/',getUsersController)
userRoute.delete('/:id',deleteUserController)
userRoute.get('/:id',getUserByIDController)


module.exports = userRoute;

