const { check } = require('express-validator');

exports.createUsuarioValidator = [
    check('nombre')
    .notEmpty()
    .withMessage('El campo nombre es requerido')
    .isString()
    .withMessage('El campo nombre es del tipo string'),
    check('apellido').notEmpty()
    .withMessage('El campo apellido es requerido')
    .isString()
    .withMessage('El campo apellido es del tipo string'),
    check('email').notEmpty()
    .withMessage('El campo email es requerido')
    .isEmail()
    .withMessage('El campo email debe ser un correo valido'),
    check('password').notEmpty()
    .withMessage('El campo password es requerido')
    .isString()
    .withMessage('El campo password no es valido'),
    check('rol').notEmpty()
    .withMessage('El campo rol es requerido')
    .isArray()
    .withMessage('El campo rol no es valido'),
];