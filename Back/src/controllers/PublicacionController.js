const {Publicacion,Empresa} = require ('../db')
const getPublicacionesController = async (req, res) => {
  try {
    // Incluye la relación con la empresa en la consulta
    const publicaciones = await Publicacion.findAll({
      include: [{
        model: Empresa,
        attributes: ['nombre_empresa'] // Solo selecciona el nombre de la empresa
      }]
    });
    res.json(publicaciones);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al obtener las publicaciones' });
    console.log(error);
  }
};

  const getByIdPublicacionController = async (req, res) => {
    const { id } = req.params;
    try {
      const publicacion = await Publicacion.findByPk(id, {
        include: [
          {
            model: Empresa,
            attributes: ['nombre_empresa'],
          },
        ],
      });
      if (!publicacion) {
        res.status(404).json({ error: 'Publicacion no encontrada' });
      } else {
        res.json(publicacion);
      }
    } catch (error) {
      res.status(500).json({ error: 'Hubo un error al obtener la publicación' });
      console.log(error);
    }
  };
  
  
  

  const deletePublicacionController = async (req,res)=>{
    try {
        const {id} = req.params;
        const publicacion = await Publicacion.findByPk(id);
        if(!publicacion){
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
  const postPublicacionController = async (req, res) => {
    const { titulo, descripcion, ubicacion, requisitos, beneficios, modalidad, id_empresa } = req.body;
    
    try {
        // Verificar si la empresa con el id proporcionado existe
        const empresa = await Empresa.findByPk(id_empresa);
        if (!empresa) {
            return res.status(404).json({ error: 'La empresa no existe' });
        }

        // Crear la publicación con el id_empresa asociado
        const publicacion = await Publicacion.create({
            titulo,
            descripcion,
            ubicacion,
            requisitos, // Debe ser un objeto JSON
            beneficios, // Debe ser un objeto JSON
            modalidad,
            id_empresa // Agregamos el id_empresa al crear la publicación
        });

        res.json("Publicación creada exitosamente");
    } catch (error) {
        res.status(500).json({ error: 'Hubo un error al crear la publicación' });
        console.log(error);
    }
};



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