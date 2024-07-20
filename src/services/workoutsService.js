const WorkoutsRepository = require('../repositories/WorkoutsRepository');

class WorkoutsService {
  async create(userId, name) {
    const repo = new WorkoutsRepository();
    return repo.create(userId, name);
  }

  async addExercise(workoutId, exerciseId) {
    const repo = new WorkoutsRepository();
    await repo.addExercise(workoutId, exerciseId);
  }

  async removeExercise(workoutId, exerciseId) {
    const repo = new WorkoutsRepository();
    await repo.removeExercise(workoutId, exerciseId);
  }

  async findByUserId(userId) {
    const repo = new WorkoutsRepository();
    return repo.findByUserId(userId);
  }

  async findExercisesByWorkoutId(workoutId) {
    const repo = new WorkoutsRepository();
    return repo.findExercisesByWorkoutId(workoutId);
  }
}

module.exports = WorkoutsService;
