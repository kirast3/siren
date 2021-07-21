const {validationResult} = require("express-validator");
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const jwt = require("jsonwebtoken");
const config = require("config");

const generateAccessToken = (id, roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, config.get("secretKey"), {expiresIn: "24h"})
}

exports.registration = async function (req, res) {
    try {
        const errors = validationResult(req)
        console.log(req.body)
        if (!errors.isEmpty()) {
            console.log('pizda  ', errors)
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректный данные при регистрации'
            })
        }
        // console.log(req.body)
        const {firstname, lastname, password, vch, rank, typeUser} = req.body;

        let candidate = await User.findOne({where: {firstname: firstname, lastname: lastname, vch: vch}, raw: true});
        console.log(candidate)

        if (candidate === null && typeUser==='graduate') {
            return res.status(400).json({message: 'Вы не можете зарегистрироваться'})
        } else if (candidate === null && typeUser==='officer'){
            const hashedPassword = await bcrypt.hash(password, 12);
            await User.create({
                firstname: firstname,
                lastname: lastname,
                password: hashedPassword,
                vch: vch,
                rank: rank,
                role: 'OFFICER',
                isRegist: true
            })
            return res.status(201).json({message: 'Пользователь создан   (officer)'})

        }else if (candidate.isRegist === 1  ) {
            return res.status(400).json({message: 'Такой пользователь уже существует'})
        }


        if (typeUser === 'graduate') {
            // Тут создаем выпускника
            const hashedPassword = await bcrypt.hash(password, 5);
            await User.update({
                    // firstname: firstname,
                    // lastname: lastname,
                    password: hashedPassword,
                    // vch: vch,
                    rank: rank,
                    role: 'GRADUATE',
                    isRegist: true
                },
                {
                    where: {
                        firstname: firstname,
                        lastname: lastname,
                        vch: vch
                    }

                });
         } //else if (typeUser === 'officer') {
        //     // Тут создаем командира подраздиления из в/ч
        //     const hashedPassword = await bcrypt.hash(password, 12);
        //     await User.create({
        //         firstname: firstname,
        //         lastname: lastname,
        //         password: hashedPassword,
        //         vch: vch,
        //         rank: rank,
        //         role: 'OFFICER',
        //         isRegist: true,
        //
        //     });
        //
        // }
        res.status(201).json({message: 'Пользователь создан'})


    } catch (e) {
        console.log(e);
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'});
    }
}

exports.login = async (req, res) => {
    try {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректный данные при входе в систему'
            })
        }

        const {firstname, lastname, password, vch} = req.body
        console.log(firstname)
        console.log(lastname)
        console.log(password)
        const user = await User.findOne({where: {firstname: firstname, lastname: lastname}, raw: true});

        if (!user) {
            return res.status(400).json({message: 'Пользователь не найден'})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
            return res.status(400).json({message: 'Неверный пароль, попробуйте снова'})
        }

        const token = generateAccessToken(user.id_user, user.role)
        // return res.json({token})

        res .json({token,  userId: user.id})

    } catch (e) {
        console.log(e)
        res.status(500).json({message: 'Что-то пошло не так, попробуйте снова'})
    }
}