const sqliteConnection = require('../database');

class UsersRepository {
  async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = ?`;
    const db = await sqliteConnection();
    const user = await db.get(query, [email]);
    return user;
  }

  async create(email, password) {
    const query = `INSERT INTO users (email, password) VALUES (?, ?)`;
    const db = await sqliteConnection();
    const result = await db.run(query, [email, password]);
    return { id: result.lastID, email, password };
  }
}

module.exports = UsersRepository;
