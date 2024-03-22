const {Router} = require("express")
const {getUsersController , getUserByIDController, deleteUserController,postUserController, putUserController} = require("../controllers/UserController")

const userRoute = Router()

userRoute.post('/',postUserController)
userRoute.put('/:id',putUserController)
userRoute.get('/',getUsersController)
userRoute.delete('/:id',deleteUserController)
userRoute.get('/:id',getUserByIDController)


module.exports = userRoute;

