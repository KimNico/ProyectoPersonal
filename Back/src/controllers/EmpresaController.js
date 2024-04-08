const { Empresa } =require('../db')
const getEmpresaController = async (req,res) => {
    try {
        const empresa = await Empresa.findAll()
        res.json(empresa)
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
        res.json(empresa)
      }
      
    } catch (error) {
      res.status(500).json({ error: 'Error al cargar las empresas'});
      console.log(error);
    }
  }

  const postEmpresaController = async (req,res)=>{
    try {
      
    } catch (error) {
      
    }
  }
  module.exports = {getEmpresaController}