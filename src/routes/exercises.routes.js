const { Router } = require('express');
const {
  create,
  getExerciseById,
  deleteById,
  getAllExercises,
} = require('../controllers/exercisesController');
const { ensureExerciseData } = require('../middlewares/ensureData');
const checkAdmin = require('../middlewares/checkAdmin');
const { authenticateToken } = require('../middlewares/authenticateToken');

const exercisesRouter = Router();

exercisesRouter.post(
  '/create',
  authenticateToken,
  checkAdmin,
  ensureExerciseData,
  create
);
exercisesRouter.get('/:id', authenticateToken, getExerciseById);
exercisesRouter.get('/', authenticateToken, getAllExercises);
exercisesRouter.delete('/:id', authenticateToken, checkAdmin, deleteById);

module.exports = exercisesRouter;
