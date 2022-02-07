const xlsx = require('node-xlsx');
const User = require("../models/User");


exports.addGraduates = async function (req, res) {
    try{
        let obj = xlsx.parse('./uploads/graduate.xlsx'/*+req.file.originalname*/); // parses a file

        for(let i = 0;i<obj[0].data.length; i++){
                console.log(obj[0].data[i])
                await User.create({
                    firstname: obj[0].data[i][0],
                    lastname: obj[0].data[i][1],
                    vch: obj[0].data[i][2],
                    isRegist:false
                })

        }
        res.status(200).json({ message: 'Выпускники добавлены' });

    }catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' });
    }
}