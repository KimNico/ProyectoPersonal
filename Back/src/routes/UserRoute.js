const { Router } = require("express");
const { 
    getUsersController, 
    getUserByIDController, 
    deleteUserController, 
    postUserController, 
    putUserController,
    loginController
} = require("../controllers/UserController");

const { validateId, validateUser } = require('../middlewares/validation');

const userRoute = Router();

userRoute.post('/', validateUser, postUserController);
userRoute.put('/:id', validateId, validateUser, putUserController);
userRoute.get('/', getUsersController);
userRoute.delete('/:id', validateId, deleteUserController);
userRoute.get('/:id', validateId, getUserByIDController);
userRoute.post('/login', loginController);


module.exports = userRoute;
