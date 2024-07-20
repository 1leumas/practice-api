const { Router } = require('express');
const {
  create,
  addExercise,
  removeExercise,
  findByUserId,
  findExercisesByWorkoutId,
} = require('../controllers/workoutsController');
const { authenticateToken } = require('../middlewares/authenticateToken');

const workoutsRouter = Router();

workoutsRouter.post('/', authenticateToken, create);
workoutsRouter.post('/add-exercise', authenticateToken, addExercise);
workoutsRouter.post('/remove-exercise', authenticateToken, removeExercise);
workoutsRouter.get('/', authenticateToken, findByUserId);
workoutsRouter.get(
  '/:workoutId/exercises',
  authenticateToken,
  findExercisesByWorkoutId
);

module.exports = workoutsRouter;
