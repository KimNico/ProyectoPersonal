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
    const User = await User.findByPk(id);
    if (!User) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    res.json(User);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al obtener el User.' });
  }
};

// Crear un nuevo User
const postUserController = async (req, res) => {
  const { nombre, apellido, pw, tipo, mail } = req.body;
  try {
    let users = await User.findAll();
    if(!users.length){
        let id = users.length > 0 ? users[users.length - 1].id + 1 :1;
        const user = await User.create({id, nombre, apellido, pw, tipo, mail });
        res.status(201).json(user);
    }else{
        let findEmail = await User.findAll({ where: { mail: mail } });
        if(!nombre || !mail){
            res.send(500).json("parameters can't be null")
        }else{
            if(findEmail.length){
                res.json("User already exist with this mail");
            }else{
                const user = await User.create({id, nombre, apellido, pw, tipo, mail });
                res.status(201).json(user);
            }
        }
    }
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al crear el User.' });
    console.log(error);
  }
};

// Actualizar un User
const putUserController = async (req, res) => {
  const { id } = req.params;
  const { nombre, email } = req.body;
  try {
    const User = await User.findByPk(id);
    if (!User) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    User.nombre = nombre;
    User.email = email;
    await User.save();
    res.json(User);
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al actualizar el User.' });
  }
};

// Eliminar un User
const deleteUserController = async (req, res) => {
  const { id } = req.params;
  try {
    const User = await User.findByPk(id);
    if (!User) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    await User.destroy();
    res.json({ mensaje: 'User eliminado correctamente.' });
  } catch (error) {
    res.status(500).json({ error: 'Hubo un error al eliminar el User.' });
  }
};

module.exports = {
    getUsersController,
    getUserByIDController,
    postUserController,
    putUserController,
  deleteUserController,
};
