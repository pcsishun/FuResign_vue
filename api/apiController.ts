import bodyParser from "body-parser";
import express from 'express';
import dotenv from 'dotenv';
import { connection } from '../config/connection.js'
 

// const config = require('../config/connection.js')
// const connection = config.connection;

dotenv.config({ path: '../.env' });
// const PORT = process.env.PORT;
const PORT = 5000;
const app = express();
app.use(bodyParser.json());



// // Add headers before the routes are defined
// app.use(function (req, res, next) {

//     // Website you wish to allow to connect
//     res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3030');

//     // Request methods you wish to allow
//     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

//     // Request headers you wish to allow
//     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader('Access-Control-Allow-Credentials', 'true');

//     // Pass to next layer of middleware
//     next();
// });




app.get('/testnodeapi', (req, res) => {
    connection.query('select * from testquerytable', (error, result, field) =>{
        if(error) throw error;
        let message = "";
        if(result === undefined || result.length === 0){
            message = "Empty";
        }else{
            message = "Success";
        }
        return res.send({ error: false, data: result, message: message});
    })
}); 



app.listen(PORT, ()=> console.log(`Serve is running at port ${PORT}`));