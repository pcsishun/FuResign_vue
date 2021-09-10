import bodyParser from "body-parser";
import express from 'express';
import { connection } from '../config/connection.js'
import cors from 'cors';

const PORT = 5000;
const app = express();
app.use(cors());
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

 
app.post('/add',(req, res) => {

    let email = req.body.email;
    let desc = req.body.desc;

    if (email.length === 0 || desc.length === 0 || email === undefined || desc === undefined){

    }else{
        let from_input = {
         email: email, 
         desc: desc
        }
        connection.query("insert into testdesc set ?", from_input, (err, result) => {
            if(err){
                return console.log("error:", err.message);
             }else{
                 return console.log("Add success add.");
             }
 
        })
    }
 })

 
app.listen(PORT, ()=> console.log(`Serve is running at port ${PORT}`));