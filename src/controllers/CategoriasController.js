import Categoria from '../models/Categoria';

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
