const { Aplicacion } = require('../db')
const getAplicacionController = async(req,res) => {
    try {
        const aplicaciones = await Aplicacion.findAll();
        res.status(200).json(aplicaciones)

    }
    catch(error) {
      res.status(404).json({ error: error.message });
      res.status(500).jso({error:"Hubo un error al conseguir las apliaciones"})
    }
  }


  const getAplicacionesByIdContnroller = async(req,res)=>{
    const {id} =req.params;
    try {
      const aplicacion = await Aplicacion.findByPk(id);
      if(!aplicacion){
        res.status(400).json({error:"Aplicacion no encontrada"})
      }
      res.status(200).json(aplicacion);
    } catch (error) {
      res.status(404).json({ error: error.message });
      res.status(500).jso({error:"Hubo un error al conseguir la aplicacion"})
    }
  }

  const postAplicacionController = async(req,res)=>{
    const {fecha_aplicacion, estado_aplicacion } = req.body;
    try {
      
    } catch (error) {
      
    }
  }


  module.exports = {getAplicacionController,getAplicacionesByIdContnroller,postAplicacionController}
