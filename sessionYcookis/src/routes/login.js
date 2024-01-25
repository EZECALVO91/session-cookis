const {login,processLogin, logout} = require('../controllers/loginController')
const express = require('express');
const router = express.Router();
const validation = require('../validation/validationRegister')

router
.get('/', login)
.post('/', validation , processLogin)
.get('/logout', logout);


module.exports = router;