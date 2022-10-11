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
