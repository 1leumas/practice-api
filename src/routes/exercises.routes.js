const { Router } = require('express');
const { create } = require('../controllers/exercisesController');
const { ensureExerciseData } = require('../middlewares/ensureData');

const exercisesRouter = Router();

exercisesRouter.post('/create', ensureExerciseData, create);
// exercisesRouter.get('/:id', getExerciseById);

module.exports = exercisesRouter;
