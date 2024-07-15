const { Router } = require('express');
const usersRouter = require('./users.routes');
const exercisesRouter = require('./exercises.routes');

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/exercises', exercisesRouter);

module.exports = routes;
