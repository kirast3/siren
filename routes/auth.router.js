const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

const {check} = require('express-validator');

router.post('/registration',
    [
        check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 })
    ],
    authController.registration);

router.post('/login' , authController.login);


module.exports = router;