import {Router} from "express";

const router = Router();
const validator = require('../validators/UsuarioValidator');

import * as UsuarioController from '../controllers/UsuarioController';

router.post('/register',validator.registro, UsuarioController.registrarUsuario);

export default router;
