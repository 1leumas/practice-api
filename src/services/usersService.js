const UsersRepository = require('../repositories/UsersRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const SECRET_KEY = 'secret';
const SALT_ROUNDS = 10;

class UsersService {
  async create(email, password, role = 'user') {
    const repo = new UsersRepository();
    const userAlreadyExists = await repo.findByEmail(email);
    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const hashedPassword = await bcrypt.hash(password, SALT_ROUNDS);
    return repo.create(email, hashedPassword, role);
  }

  async login(email, password) {
    const repo = new UsersRepository();
    const user = await repo.findByEmail(email);
    if (!user) {
      throw new Error('User not found');
    }
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new Error('Invalid password');
    }

    const token = jwt.sign({ email: user.email, id: user.id, role: user.role }, SECRET_KEY, {
      expiresIn: '1h',
    });
    return token;
  }

  async getUserById(id) {
    const repo = new UsersRepository();
    const user = await repo.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    return user;
  }
}

module.exports = UsersService;
