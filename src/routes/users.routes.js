const { Router } = require('express');
const { create, login } = require('../controllers/usersController');
const ensureData = require('../middlewares/ensureData.js');

const usersRouter = Router();

usersRouter.post('/', ensureData, create);
usersRouter.post('/login', ensureData, login);

module.exports = usersRouter;
