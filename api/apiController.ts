import bodyParser from "body-parser";
import express from 'express';
import dotenv from 'dotenv';
import { connection } from '../config/connection.js'
 

// const config = require('../config/connection.js')
// const connection = config.connection;

dotenv.config({ path: '../.env' });
const PORT = process.env.PORT;

const app = express();
app.use(bodyParser.json());



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