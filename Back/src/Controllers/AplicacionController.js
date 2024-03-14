const getAplicacionController = async (req,res) => {
    const { id } = req.params;
    try {
        res.status(200).send(`aplicacion`);
    }
    catch(error) {
      res.status(404).json({ error: error.message });
    }
  }
  module.exports = {getAplicacionController}