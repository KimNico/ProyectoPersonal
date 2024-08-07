const { User } = require('../db');

// Obtener todos los Users
const getUsersController = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Hubo un error al obtener los Users.' });
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
    res.status(200).json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Hubo un error al obtener el User.' });
  }
};

// Crear un nuevo User
const postUserController = async (req, res) => {
  const {nombre_usuario, nombre, apellido, pw, mail } = req.body;
  try {
    if (!nombre || !mail) {
      return res.status(400).json({ error: "Los parámetros 'nombre' y 'mail' son obligatorios." });
    }

    const existingUser = await User.findOne({ where: { mail } });
    if (existingUser) {
      return res.status(409).json({ error: "Ya existe un usuario con este correo electrónico." });
    }

    const user = await User.create({nombre_usuario, nombre, apellido, pw, mail });
    res.status(201).json({ message: 'Usuario creado exitosamente', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Hubo un error al crear el User.' });
  }
};

// Actualizar un User
const putUserController = async (req, res) => {
  const { id } = req.params;
  const {nombre_usuario, nombre, apellido, pw, mail } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    user.nombre_usuario = nombre_usuario || user.nombre_usuario;
    user.nombre = nombre || user.nombre;
    user.apellido = apellido || user.apellido;
    user.pw = pw || user.pw;
    user.mail = mail || user.mail;

    await user.save();
    res.status(200).json({ message: 'Usuario actualizado exitosamente', user });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ error: 'Hubo un error al actualizar el User.' });
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
    res.status(200).json({ message: 'Usuario eliminado correctamente.' });
  } catch (error) {
    console.error('Error deleting user:', error);
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
