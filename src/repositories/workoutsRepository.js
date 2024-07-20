const sqliteConnection = require('../database');

class WorkoutsRepository {
  async create(userId, name) {
    const query = 'INSERT INTO workouts (user_id, name) VALUES (?, ?)';
    const db = await sqliteConnection();
    const result = await db.run(query, [userId, name]);
    return { id: result.lastID, userId, name };
  }

  async addExercise(workoutId, exerciseId) {
    const query =
      'INSERT INTO workout_exercises (workout_id, exercise_id) VALUES (?, ?)';
    const db = await sqliteConnection();
    await db.run(query, [workoutId, exerciseId]);
  }

  async removeExercise(workoutId, exerciseId) {
    const query =
      'DELETE FROM workout_exercises WHERE workout_id = ? AND exercise_id = ?';
    const db = await sqliteConnection();
    await db.run(query, [workoutId, exerciseId]);
  }

  async findByUserId(userId) {
    const query = 'SELECT * FROM workouts WHERE user_id = ?';
    const db = await sqliteConnection();
    const workouts = await db.all(query, [userId]);
    return workouts;
  }

  async findExercisesByWorkoutId(workoutId) {
    const query = `
      SELECT exercises.* FROM exercises
      JOIN workout_exercises ON exercises.id = workout_exercises.exercise_id
      WHERE workout_exercises.workout_id = ?
    `;
    const db = await sqliteConnection();
    const exercises = await db.all(query, [workoutId]);
    return exercises;
  }
}

module.exports = WorkoutsRepository;
