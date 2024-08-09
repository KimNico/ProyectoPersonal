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
  const getEmpresaByIdController = async (req,res)=>{
    const {id} =req.params;
    try {
      const empresa = await findByPk(id)
      if(!empresa.length){
        res.status(404).json({error:'Empresa no encotrado'})
      }else{
        return empresa
      }
      
    } catch (error) {
      res.status(500).json({ error: 'Error al cargar las empresas'});
      console.log(error);
    }
  };

  const postEmpresaController = async (req, res) => {
    const { nombre_empresa, descripcion, cant_empleados, mail, pw, categoria,telefono } = req.body;
  
    try {
      if (!nombre_empresa || !mail) {
        return res.status(400).send("Parameters can't be null");
      }
  
      // Wait for the promise to resolve
      let findMail = await Empresa.findAll({ where: { mail: mail } });
  
      if (findMail.length) {
        return res.status(409).send("Company already exists with this mail");
      } else {
        const empresa = await Empresa.create({ nombre_empresa, descripcion, cant_empleados, mail, pw, categoria,telefono });
        return res.status(201).send({ empresa, message: "Company created successfully" });
      }
    } catch (error) {
      return res.status(500).send({ error: "Error al crear la empresa" });
    }
  };
  

  const putEmpresaController = async(req,res)=>{
    const { id } = req.params;
    const { nombre_empresa, descripcion, cant_empleados, logo, mail, pw, categoria} = req.body;
try {
  const empresa = Empresa.findByPk(id)
  if(!empresa){
    res.status(404).send({error:"Empresa no encontrada "})
  }else{
    empresa.nombre_empresa = nombre_empresa
    empresa.descripcion = descripcion
    empresa.cant_empleados = cant_empleados
    empresa.logo = logo
    empresa.mail = mail
    empresa.pw = pw
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