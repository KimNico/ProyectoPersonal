const {User} = require('../db');

// Obtener todos los Users
const getUsersController = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al obtener los Users.' });
    console.log(error);
  }
};

// Obtener un User por ID
const getUserByIDController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al obtener el User.' });
  }
};

// Crear un nuevo User
const postUserController = async (req, res) => {
  const { nombre, apellido, pw, tipo, mail,foto,cv } = req.body;
  let findEmail = await User.findAll({ where: { mail: mail } });
  try {
        if(!nombre || !mail){
          return  res.status(500).send("parameters can't be null")
        }else if(findEmail.length){
            return res.status(409).send("User already exist with this mail");
        }else{
                const user = await User.create({ nombre, apellido, pw, tipo, mail,foto,cv });
                res.json(user,"user created successfuly")
              }
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al crear el User.' });
    console.log(error);
  }
};

// Actualizar un User
const putUserController = async (req, res) => {
  const { id } = req.params;
  const { nombre, apellido, pw, tipo, mail,foto, cv } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    user.nombre = nombre;
    user.apellido = apellido;
    user.pw = pw;
    user.tipo = tipo;
    user.email = mail;
    user.foto = foto;
    user.cv = cv;
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al actualizar el User.' });
    console.log(error);
  }
};

// Eliminar un User
const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    await user.destroy();
    res.json({ mensaje: 'User eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al eliminar el User.' });
    console.log(error);
  }
};

module.exports = {
    getUsersController,
    getUserByIDController,
    postUserController,
    putUserController,
  deleteUserController,
};
