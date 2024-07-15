const UsersService = require('../services/usersService');

async function create(req, res) {
  const { email, password } = req.body;

  const usersService = new UsersService();

  try {
    const user = await usersService.create(email, password);
    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function login(req, res) {
  const { email, password } = req.body;

  const usersService = new UsersService();

  try {
    const token = await usersService.login(email, password);
    return res.status(200).json({ token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

module.exports = { create, login };
