const getAplicacionController = (req,res) => {
    try {
        res.status(200).send(`aplicacion`);
    }
    catch(error) {
      res.status(404).json({ error: error.message });
    }
  }
  module.exports = {getAplicacionController}
