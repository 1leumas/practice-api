const jwt = require('jsonwebtoken');
const UsersRepository = require('../repositories/usersRepository');

const SECRET_KEY = 'secret';

async function authenticateToken(req, res, next) {
  // console.log('authenticating token');
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(403).json({ error: 'No token provided' });
  }

  try {
    const decoded = jwt.verify(token.split(' ')[1], SECRET_KEY);
    const repo = new UsersRepository();
    const user = await repo.findById(decoded.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(500).json({ error: 'Failed to authenticate token' });
  }
}

module.exports = { authenticateToken };
