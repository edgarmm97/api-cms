import Categoria from '../models/Categoria';

/* 
    Función que crea la categoria, recibe como parametros name, slug
*/

export const createCategoria =  async (req, res) => {
    
    const {name, slug} = req.body;

    const nuevaCategoria = new Categoria({ name: name, slug: slug});

    try {

        const categoria = await nuevaCategoria.save();

        return res.status(201).json({msg:'Categoria creada con exito'});
    
        
    } catch (error) {

        console.error(error);
    
    }
    
}

/**
 * Controlador para eliminar la categoria
 * @param idCategoria 
 *  
 */

export const deleteCategoriaById = async(req, res) => {

    const {idCategoria} = req.params;

    try {
    
        const categoria = await Categoria.findOneAndDelete(idCategoria);

        return res.status(202).json({msg:'Categoria eliminada con exito'})
    
    } catch (error) {
        
        console.error(error);    
    
    }

}

/*
    Controlador que retorna todas las categorias
*/
export const findCategorias = async (req, res) => {

    try {

        const categorias = await Categoria.find();

        res.status(200).json(categorias);

        
    } catch (error) {
        
        console.error(error);
    
    }

}

export const findCategoriaById = async (req, res) => {

    const {idCategoria} = req.params;

    try {
    
        const categoria = await Categoria.findById(idCategoria);

        return res.status(200).json(categoria)
    
    } catch (error) {
        
        console.error(error);    
    
    }

}
