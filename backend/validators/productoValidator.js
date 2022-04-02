const { check } = require('express-validator');

exports.createProductoValidator = [
    check('nombre')
    .notEmpty()
    .withMessage('El campo nombre es requerido')
    .isString()
    .withMessage('El campo nombre es del tipo string'),
    check('precio').notEmpty()
    .withMessage('El campo precio es requerido')
    .isNumeric()
    .withMessage('El campo precio es del tipo numerico'),
    check('stock').notEmpty()
    .withMessage('El campo stock es requerido')
    .isNumeric()
    .withMessage('El campo stock es del tipo numerico'),
    check('codigo').notEmpty()
    .withMessage('El campo codigo es requerido')
    .isString()
    .withMessage('El campo codigo es del tipo string'),
];