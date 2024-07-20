const { Router } = require('express');
const usersRouter = require('./users.routes');
const exercisesRouter = require('./exercises.routes');
const workoutsRouter = require('./workouts.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/exercises', exercisesRouter);
routes.use('/workouts', workoutsRouter);

module.exports = routes;
