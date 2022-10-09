import { Router } from 'express';

const router = Router();

import * as CategoriaController from '../controllers/CategoriasController';

router.get('/index', (req, res) => {
    res.json({message: 'Hola mundo'});
})

router.post('/create', CategoriaController.createCategoria);

export default router;