const {Router} = require("express")
const {getUsersController , getUserByIDController, deleteUserController,postUserController} = require("../controllers/UserController")

const userRoute = Router()

userRoute.post('/',postUserController)
userRoute.put('/')
userRoute.get('/',getUsersController)
userRoute.delete('/:id',deleteUserController)
userRoute.get('/:id',getUserByIDController)


module.exports = userRoute;

