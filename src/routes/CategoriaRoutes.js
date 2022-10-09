import { Router } from 'express';

const router = Router();

import * as CategoriaController from '../controllers/CategoriasController';

router.get('/', CategoriaController.findCategorias);

router.get('/:idCategoria', CategoriaController.findCategoriaById);

router.post('/create', CategoriaController.createCategoria);

router.delete('/:idCategoria', CategoriaController.deleteCategoriaById);

router.put('/:idCategoria', CategoriaController.updateCategoriaById);


export default router;