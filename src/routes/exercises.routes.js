const { Router } = require('express');
const {
  create,
  getExerciseById,
  deleteById,
} = require('../controllers/exercisesController');
const { ensureExerciseData } = require('../middlewares/ensureData');
const checkAdmin = require('../middlewares/checkAdmin');

const exercisesRouter = Router();

exercisesRouter.post('/create', checkAdmin, ensureExerciseData, create);
exercisesRouter.get('/:id', getExerciseById);
exercisesRouter.delete('/:id', checkAdmin, deleteById);

module.exports = exercisesRouter;
