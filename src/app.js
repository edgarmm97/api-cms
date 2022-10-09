import express from 'express';
import morgan from 'morgan';
import { PORT, PREFIX } from './config';

import CategoriasRouter from './routes/CategoriaRoutes';

const app = express();

app.use(morgan('dev'))

app.use(express.json()); //Configuración que permite a la API retornar un JSON

app.set('port', PORT);

//EJEMPLO DE RUTA

//app.use("api/v1/categorias", CategoriasRouter);

app.get('/', (req, res) => {
    res.json({message: 'Hola mundo'});
})

app.use(`/${PREFIX}/categoria`, CategoriasRouter);

export default app;