const {body}= require('express-validator')

const formulario =[
    body('name')
    .notEmpty().withMessage('*DEBE COMPLETAR EL CAMPO*').bail()
    .isLength({min:5, max:18}).withMessage('*MINIMO CARACTERES 5 Y MAXIMO 18*').bail(),
    
    body('color')
    .notEmpty().withMessage('*DEBE SELECCIONAR UN COLOR*').bail(),
    
    body('email')
    .notEmpty().withMessage('*DEBE COMPLETAR EL CAMPO*').bail()
    .isEmail().withMessage('*DEBE COMPLETAR CON UN FORMATO VALIDO EL CAMPO*').bail(),
    
    body('edad')
    .notEmpty().withMessage('*DEBE COMPLETAR SU EDAD*').bail()
    .isInt({ min: 18, max: 80}).withMessage('*DEBE COMPLETAR EL CAMPO ENTRE 18 y 80 AÑOS*').bail()
]


module.exports = formulario;