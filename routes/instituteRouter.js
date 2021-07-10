const express = require('express');
const multer = require("multer");
const roleMiddleware = require('../middleware/roleMiddleware')
const instituteController = require('../controllers/instituteController')
const router = express.Router();

const storageConfig = multer.diskStorage({
    destination:(req,file, callback)=>{
        callback(null,'uploads');
    },
    filename:(req, file, callback)=>{
        callback(null,file.originalname);
    }
})
const upload = multer({storage:storageConfig})


router.post('/addGraduates', /*roleMiddleware(['INSTITUTE']),*/ upload.single('filedata'), instituteController.addGraduates )

module.exports = router;