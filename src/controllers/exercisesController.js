const ExercisesService = require('../services/exercisesService');

async function create(req, res) {
  const { name, category, subcategory, description, video } = req.body;

  const exercisesService = new ExercisesService();

  try {
    const exercise = await exercisesService.create({
      name,
      category,
      subcategory,
      description,
      video,
    });
    return res.status(201).json({
      message: 'Exercise created successfully',
      exercise,
    });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

async function getExerciseById(req, res) {
  const { id } = req.params;

  const exercisesService = new ExercisesService();

  try {
    const exercise = await exercisesService.getExerciseById(id);
    return res.status(200).json(exercise);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

async function deleteById(req, res) {
  const { id } = req.params;

  const exercisesService = new ExercisesService();

  try {
    await exercisesService.deleteById(id);
    return res.status(200).json({ message: 'Exercise deleted successfully' });
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

async function getAllExercises(req, res) {
  const exercisesService = new ExercisesService();

  try {
    const exercises = await exercisesService.getAllExercises();
    return res.status(200).json(exercises);
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
}

module.exports = { create, getExerciseById, deleteById, getAllExercises };
