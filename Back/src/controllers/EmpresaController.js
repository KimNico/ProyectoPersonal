const { Empresa } =require('../db')
const getEmpresaController = async (req,res) => {
    try {
    const empresas = await Empresa.findAll()
    res.status(200).json(empresas)
    }
    catch(error) {
      res.status(500).json({ error: 'Error al cargar las empresas'});
      console.log(error);
    }
  }
  const getEmpresaByIdController = async (req, res) => {
    const { id } = req.params;
    try {
      // Buscar la empresa por su clave primaria (id)
      const empresa = await Empresa.findByPk(id);
      if (!empresa) {
        // Si no se encuentra la empresa, devolver un error 404
        return res.status(404).json({ error: 'Empresa no encontrada' });
      }
      // Si se encuentra la empresa, devolver los datos de la empresa
      return res.json(empresa);
    } catch (error) {
      // Capturar cualquier error y devolver un error 500
      res.status(500).json({ error: 'Error al cargar la empresa' });
      console.error(error); // Imprimir el error en la consola para depuración
    }
  };

  const postEmpresaController = async (req, res) => {
    const { nombre_empresa, descripcion, cant_empleados, email, password, categoria,telefono } = req.body;
  
    try {
      if (!nombre_empresa || !email) {
        return res.status(400).send("Parameters can't be null");
      }
  
      // Wait for the promise to resolve
      let findMail = await Empresa.findAll({ where: { email: email } });
  
      if (findMail.length) {
        return res.status(409).send("Company already exists with this email");
      } else {
        const empresa = await Empresa.create({ nombre_empresa, descripcion, cant_empleados, email, password, categoria,telefono });
        return res.status(201).send({ empresa, message: "Company created successfully" });
      }
    } catch (error) {
      return res.status(500).send({ error: "Error al crear la empresa" });
    }
  };
  

  const putEmpresaController = async(req,res)=>{
    const { id } = req.params;
    const { nombre_empresa, descripcion, cant_empleados, logo, email, password, categoria} = req.body;
try {
  const empresa = Empresa.findByPk(id)
  if(!empresa){
    res.status(404).send({error:"Empresa no encontrada "})
  }else{
    empresa.nombre_empresa = nombre_empresa
    empresa.descripcion = descripcion
    empresa.cant_empleados = cant_empleados
    empresa.logo = logo
    empresa.email = email
    empresa.password = password
    empresa.categoria = categoria
    await empresa.save()
    res.json(empresa)
  }
} catch (error) {
  res.status(500).send({error:"Error al actualizar la empresa"})

}
  };

  const deleteEmpresaController = async(req,res)=>{
    let {id} = req.params
    try{
      let empresa = Empresa.findByPk(id)
      if(!empresa){
        res.status(404).send({error:"Empresa no encontrada "})
      }else{
        await empresa.destroy()
        res.json({ mensaje: 'Empresa eliminado correctamente.' });
      }
      
    } catch (error) {
      res.status(500).send({error:"Error al eliminar la empresa"})

    }
  }
  module.exports = {getEmpresaController,postEmpresaController,postEmpresaController,getEmpresaByIdController,putEmpresaController,deleteEmpresaController}