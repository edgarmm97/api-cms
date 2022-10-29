import {Router} from "express";

const router = Router();
const validator = require('../validators/UsuarioValidator');

import * as UsuarioController from '../controllers/UsuarioController';

router.post('/register', validator.registro, UsuarioController.registrarUsuario);

router.post('/login', validator.login, UsuarioController.login);

router.get('/:idUsuario', UsuarioController.findUsuarioById);

export default router;
