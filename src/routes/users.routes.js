const { Router } = require('express');
const { create, login, getUser } = require('../controllers/usersController');
const { ensureUserData } = require('../middlewares/ensureData');
const { authenticateToken } = require('../middlewares/authenticateToken');

const usersRouter = Router();

usersRouter.post('/', ensureUserData, create);
usersRouter.post('/login', ensureUserData, login);
usersRouter.get('/me', authenticateToken, getUser);

module.exports = usersRouter;
