const {Router} = require("express")
const {getEmpresaController, getEmpresaByIdController,postEmpresaController,putEmpresaController,deleteEmpresaController} = require("../controllers/EmpresaController")

const empresaRoute = Router()

empresaRoute.post('/',postEmpresaController)
empresaRoute.put('/:id',putEmpresaController)
empresaRoute.get('/',getEmpresaController)
empresaRoute.delete('/:id',deleteEmpresaController)
empresaRoute.get('/:id',getEmpresaByIdController)


module.exports = empresaRoute;

