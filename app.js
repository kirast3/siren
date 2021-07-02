const express = require('express');
const config = require('config');
const path = require('path');

// const corsMiddleware = require('./middleware/cors.middleware')
let cors = require('cors');


const app = express();
const app1 = express();
const PORT = config.get("serverPort");
app.use(cors())
// app.use(corsMiddleware)
app.use(express.json());

const authRouter =require('./routes/authRouter');

app.use('/auth', authRouter);
console.log(process.env.NODE_ENV)
if (process.env.NODE_ENV === 'production') {
    console.log('Index file send')
    app.use('/', express.static(path.join(__dirname, 'client', 'public')))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
    })
}


app.use('/', express.static(path.join(__dirname, 'client', 'public')))

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'))
})

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
