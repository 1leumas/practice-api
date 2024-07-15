const sqliteConnection = require('../database');

class ExercisesRepository {
  async create({ name, category, subcategory, description, video }) {
    let query = `INSERT INTO exercises (name, category`;
    const values = [name, category];

    if (subcategory) {
      query += `, subcategory`;
      values.push(subcategory);
    }
    if (description) {
      query += `, description`;
      values.push(description);
    }
    if (video) {
      query += `, video`;
      values.push(video);
    }
    query += `) VALUES (?, ?`;

    if (subcategory) query += `, ?`;
    if (description) query += `, ?`;
    if (video) query += `, ?`;
    query += `)`;

    const db = await sqliteConnection();
    const result = await db.run(query, values);
    return {
      id: result.lastID,
      name,
      category,
      subcategory,
      description,
      video,
    };
  }

  async findByName(name) {
    const query = `SELECT * FROM exercises WHERE name = ?`;
    const db = await sqliteConnection();
    const exercise = await db.get(query, [name]);
    return exercise;
  }

  async findById(id) {
    const query = `SELECT * FROM exercises WHERE id = ?`;
    const db = await sqliteConnection();
    const exercise = await db.get(query, [id]);
    return exercise;
  }
}

module.exports = ExercisesRepository;
