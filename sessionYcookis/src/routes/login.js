const {login,processLogin} = require('../controllers/loginController')
const express = require('express');
const router = express.Router();
const validation = require('../validation/validationRegister')

router
.get('/', login)
.post('/', validation , processLogin)


module.exports = router;