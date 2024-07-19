const sqliteConnection = require('../database');

class UsersRepository {
  async findByEmail(email) {
    const query = `SELECT * FROM users WHERE email = ?`;
    const db = await sqliteConnection();
    const user = await db.get(query, [email]);
    return user;
  }

  async create(email, password, role = 'user') {
    const query = `INSERT INTO users (email, password, role) VALUES (?, ?, ?)`;
    const db = await sqliteConnection();
    const result = await db.run(query, [email, password, role]);
    return { id: result.lastID, email, password, role };
  }

  async findById(id) {
    const query = 'SELECT * FROM users WHERE id = ?';
    const db = await sqliteConnection();
    const user = await db.get(query, [id]);
    return user;
  }
}

module.exports = UsersRepository;
