const { Router, request } = require('express');

const { DadosjogosController } = require('./controllers/dadosjogos');
const { UserController } = require('./controllers/user');
const { authMiddleware } = require('./middleware/auth-middleware');

const routes = Router();

const dadosjogosController = new DadosjogosController();
const userController = new UserController();

routes.post('/dadosjogos', authMiddleware, dadosjogosController.create);
routes.get('/dadosjogos', authMiddleware, dadosjogosController.getAll);
routes.delete('/dadosjogos/:id', authMiddleware, dadosjogosController.delete);
routes.put('/dadosjogos/:id', authMiddleware, dadosjogosController.update);

routes.post('/register', userController.register);
routes.post('/login', userController.login);
routes.get('/login', authMiddleware, userController.getAll);

module.exports = { routes };
