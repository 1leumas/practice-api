const { Router } = require('express');
const {
  create,
  getExerciseById,
  deleteById,
} = require('../controllers/exercisesController');
const { ensureExerciseData } = require('../middlewares/ensureData');

const exercisesRouter = Router();

exercisesRouter.post('/create', ensureExerciseData, create);
exercisesRouter.get('/:id', getExerciseById);
exercisesRouter.delete('/:id', deleteById);

module.exports = exercisesRouter;
