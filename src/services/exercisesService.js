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
}

module.exports = ExercisesService;
