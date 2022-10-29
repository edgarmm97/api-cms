const { celebrate, Joi, Segments } = require('celebrate');

const { PASSWORD_PATTERN } = require('../common/const/UsuarioConst');

const registro = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        name: Joi.string().required(),
        lastName: Joi.string().required(),
        birthDate: Joi.date().iso().required(),
        password: Joi.string().regex(PASSWORD_PATTERN).required()
    })
});

const login = celebrate({
    [Segments.BODY]: Joi.object().keys({
        email: Joi.string().required(),
        password: Joi.string().required(),
    })
});

module.exports = {registro,login};
