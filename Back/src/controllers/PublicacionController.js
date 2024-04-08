const {Publicacion} = require ('../db')
const getPublicacionesController = async (req,res) => {
  try{
    const publicaciones = await Publicacion.findAll();
    res.json(publicaciones)

  }catch(error){
    res.status(500).json({error:'Hubo un error al obetener las publicaciones'})
    console.log(error);
  }
  }

  const getByIdPublicacionController = async (req,res) => {
        const {id} =req.params
    try{
      const publicacion = await Publicacion.findByPk(id);
      if(!publicacion.length){
        res.status(404).json({error:'Publicacion no encontrado'})
      }else{
        res.json(publicacion)
      }
    }catch(error){
      res.status(500).json({error:'Hubo un error al obetener las publicaciones'})
      console.log(error);
    }
    }



  const deletePublicacionController = async (req,res)=>{
    try {
        const {id} = req.params;
        const publicacion = await Publicacion.findByPk(id);
        if(!publicacion.length){
            res.status(404).json({error:'Publicacion no encontrado'})
        }else{
            await publicacion.destroy()
            res.status(200).json('Publicacion eliminado con exito');
        }

    } catch (error) {
        res.status(500).json({error:'Hubo un error al eliminar una publicacion'})
    console.log(error);
    }
  }

  const postPublicacionController = async(req,res)=>{
      const {titulo, descripcion, ubicacion, salario} = req.body
   try {
    const publicacion = await Publicacion.create({titulo,descripcion,ubicacion,salario})
    res.json("publicacion creado exitosamente")
   } catch (error) {
    res.status(500).json({error:'Hubo un error al cargar la publicacion'})
    console.log(error);
   }
  }

  const putPublicacionController = async (req,res)=>{
    try {
        const {id} = req.params
        const {titulo, descripcion, ubicacion, salario} = req.body
        const publicacion = await Publicacion.findByPk(id)
        if(!publicacion.length){
            res.status(404).json({error:'Publicacion no encontrado'})
        }else{
            publicacion.titulo = titulo;
            publicacion.descripcion = descripcion;
            publicacion.ubicacion = ubicacion;
            publicacion.salario = salario;
            await publicacion.save()
        }
    } catch (error) {
        res.status(500).json({error:'Hubo un error al actualizar la publicacion'})
        console.log(error);
    }
  }


  module.exports = {getPublicacionesController, postPublicacionController,deletePublicacionController,putPublicacionController,getByIdPublicacionController}