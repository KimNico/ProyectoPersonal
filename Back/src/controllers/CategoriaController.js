const getCategoriaController = async (req,res) => {
    try {
        res.status(200).send(`Categoria`);
    }
    catch(error) {
      res.status(404).json({ error: error.message });
    }
  }
  module.exports = {getCategoriaController}