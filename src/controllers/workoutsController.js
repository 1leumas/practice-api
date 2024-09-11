const WorkoutsService = require('../services/workoutsService');

async function create(req, res) {
  const { name } = req.body;
  const userId = req.user.id;

  const workoutsService = new WorkoutsService();

  try {
    const workout = await workoutsService.create(userId, name);
    return res
      .status(201)
      .json({ message: 'Workout created successfully', workout });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function addExercise(req, res) {
  const { workoutId, exerciseId } = req.body;

  const workoutsService = new WorkoutsService();

  try {
    await workoutsService.addExercise(workoutId, exerciseId);
    return res
      .status(201)
      .json({ message: 'Exercise added to workout successfully' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function removeExercise(req, res) {
  const { workoutId, exerciseId } = req.body;

  const workoutsService = new WorkoutsService();

  try {
    await workoutsService.removeExercise(workoutId, exerciseId);
    return res
      .status(200)
      .json({ message: 'Exercise removed from workout successfully' });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function findByUserId(req, res) {
  const userId = req.user.id;

  const workoutsService = new WorkoutsService();

  try {
    const workouts = await workoutsService.findByUserId(userId);
    return res.status(200).json(workouts);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function findExercisesByWorkoutId(req, res) {
  const { workoutId } = req.params;

  const workoutsService = new WorkoutsService();

  try {
    const exercises = await workoutsService.findExercisesByWorkoutId(workoutId);
    return res.status(200).json(exercises);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

module.exports = {
  create,
  addExercise,
  removeExercise,
  findByUserId,
  findExercisesByWorkoutId,
};
