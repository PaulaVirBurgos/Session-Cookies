const {body} = require('express-validator');

module.exports = [
    body('nombre')
        .notEmpty().withMessage('Ingresa tu nombre.'),

    body('colors')
        .notEmpty().withMessage('Ingresa tu color.'),

    body('email')
        .notEmpty().withMessage('Ingresa tu mail.'),

    body('edad')
        .notEmpty().withMessage('Ingresa tu edad.').bail()
        .isNumeric().withMessage('Ingrese un valor numerico')
]