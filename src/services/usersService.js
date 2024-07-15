const UsersRepository = require('../repositories/UsersRepository');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret';

class UsersService {
  async create(email, password) {
    const repo = new UsersRepository();
    const userAlreadyExists = await repo.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }
    return repo.create(email, password);
  }

  async login(email, password) {
    const repo = new UsersRepository();
    const user = await repo.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    if (user.password !== password) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ email: user.email, id: user.id }, SECRET_KEY, {
      expiresIn: '1h',
    });
    return token;
  }
}

module.exports = UsersService;
