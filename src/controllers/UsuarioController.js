import Usuario from "../models/Usuario";
const {hashPassword} =  require('../common/helpers/UsuarioHelper');

/*
    Funcion que registra el usuario en la bdd
 */

export const registrarUsuario = async (req,res) => {

    const {email, name, lastName, birthDate,password} = req.body;

    const nuevoUsuario = new Usuario({
        email: email,
        personal_information: {
            name: name,
            last_name: lastName,
            birth_date: birthDate
        },
        password_hash: await hashPassword(password),
    });

    try{
        const usuario = await nuevoUsuario.save();

        return res.status(201).json({msg:"Usuario registrado con exito",usuario});
    }catch (error){
        console.error(error);
    }
}

/**
 * Controlador para iniciar sesion
 * @param email
 * @param password
 */
export const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        const usuario = await Usuario.findOne({email:email});

        if (!usuario){
            return res.status(400).json({msg:"No hay usuario registrado con la informacion ingresafa"});
        }

        const password_hash = await hashPassword(password);

        if (!password_hash === usuario.password_hash){
            return res.status(401).json({msg:"Credenciales invalidas"});
        }

        return res.status(200).json({auth: true});
    }catch (error) {
        res.status(500).json({msg:"Error en el servidor. "+error.msg})
    }
}

export const findUsuarioById = async (req, res) => {
    const {idUsuario} = req.params;

    try{
        const usuario = await Usuario.findById(idUsuario);

        if (!usuario){
            return res.status(404).json({msg:"Usuario no encontrado en la base de datos"});
        }

        return res.status(200).json(usuario);

    }catch (error) {
        res.status(500).json({msg:"Error en el servidor. "+error.msg})
    }
}


