const UsersService = require('../services/UsersService');

async function create(req, res) {
  const { email, password, role } = req.body;

  const usersService = new UsersService();

  try {
    const user = await usersService.create(email, password, role);
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
    return res.status(200).json({ email, token });
  } catch (error) {
    return res.status(401).json({ error: error.message });
  }
}

module.exports = { create, login };
