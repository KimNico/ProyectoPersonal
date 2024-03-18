const {Router} = require("express")
const {getUsersController , getUserByIDController} = require("../controllers/UserController")

const userRoute = Router()

userRoute.post('/')
userRoute.put('/')
userRoute.get('/',getUsersController)
userRoute.delete('/')
userRoute.get('/:id',getUserByIDController)


module.exports = userRoute;

