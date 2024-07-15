const { Router } = require('express');
const { create, login } = require('../controllers/usersController');
const { ensureUserData } = require('../middlewares/ensureData');

const usersRouter = Router();

usersRouter.post('/', ensureUserData, create);
usersRouter.post('/login', ensureUserData, login);

module.exports = usersRouter;
