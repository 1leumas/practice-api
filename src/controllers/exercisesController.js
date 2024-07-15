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

module.exports = { create };
