const express = require('express');
const config = require('config');
const path = require('path');
// const corsMiddleware = require('./middleware/cors.middleware')
const cors = require('cors');

const app = express();

const PORT = config.get("serverPort");

app.use(cors())
app.use(express.json());

/**
 * Подключение роутов
 */
const authRouter =require('./routes/authRouter');
const instituteRouter =require('./routes/instituteRouter');
//Тоже роуты
app.use('/auth', authRouter);
app.use('/institute', instituteRouter);


console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    console.log('Index file send')
    app.use('/', express.static(path.join(__dirname, 'client', 'public')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })
}


const start = async () =>{
    try {
        // await mongoose.connect(config.get("dbUrl"))
        app.listen(PORT,()=>{
            console.log('Server started on port ', PORT);
        })
    }catch (e) {
        console.log(e)
    }
}

start();
