const { User } = require('../db');
const bcrypt = require('bcrypt');

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
  const { username, name, surname, password, email } = req.body;
  try {
    if (!name || !email) {
      return res.status(400).json({ error: "Los parámetros 'nombre' y 'email' son obligatorios." });
    }

    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(409).json({ error: "Ya existe un usuario con este correo electrónico." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({ username, name, surname, password: hashedPassword, email });
    res.status(201).json({ message: 'Usuario creado exitosamente', user });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Hubo un error al crear el User.' });
  }
};


// Actualizar un User
const putUserController = async (req, res) => {
  const { id } = req.params;
  const {username, name, surname, password, email } = req.body;
  try {
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: 'User no encontrado.' });
    }
    user.username = username || user.username;
    user.name = name || user.name;
    user.surname = surname || user.surname;
    user.password = password || user.password;
    user.email = email || user.email;

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
const loginController = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      return res.status(401).json({ error: 'Invalid username or password' });
    }

    const { password: _, ...userData } = user.toJSON();
    res.status(200).json({ success: true, user: userData });
  } catch (error) {
    console.error('Error during login:', error);
    res.status(500).json({ error: 'An error occurred during login' });
  }
};


module.exports = {
  getUsersController,
  getUserByIDController,
  postUserController,
  putUserController,
  deleteUserController,
  loginController
};
