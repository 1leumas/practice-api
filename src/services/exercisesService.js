const ExercisesRepository = require('../repositories/exercisesRepository');

class ExercisesService {
  async create({ name, category, subcategory, description, video }) {
    const repo = new ExercisesRepository();
    const existingExercise = await repo.findByName(name);
    if (existingExercise) {
      throw new Error('Exercise already exists');
    }
    return repo.create({ name, category, subcategory, description, video });
  }

  async getExerciseById(id) {
    const repo = new ExercisesRepository();
    const exercise = await repo.findById(id);
    if (!exercise) {
      throw new Error('Exercise not found');
    }
    return exercise;
  }

  async deleteById(id) {
    const repo = new ExercisesRepository();
    const exercise = await repo.findById(id);
    if (!exercise) {
      throw new Error('Exercise not found');
    }
    await repo.deleteById(id);
  }

  async getAllExercises() {
    const repo = new ExercisesRepository();
    return repo.getAll();
  }
}

module.exports = ExercisesService;
