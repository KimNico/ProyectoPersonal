const getEmpresaController = async (req,res) => {
    try {
        res.status(200).send(`Empresa`);
    }
    catch(error) {
      res.status(404).json({ error: error.message });
    }
  }
  module.exports = {getEmpresaController}