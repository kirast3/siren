const express = require('express');
const config = require('config')
// const corsMiddleware = require('./middleware/cors.middleware')
let cors = require('cors');


const app = express();
const PORT = config.get("serverPort");
app.use(cors())
// app.use(corsMiddleware)
app.use(express.json())



const start = async () =>{
    try {
        // await mongoose.connect(config.get("dbUrl"))
        app.listen(PORT,()=>{
            console.log('Server started on port ', PORT);
        })
    }catch (e) {

    }
}
start();