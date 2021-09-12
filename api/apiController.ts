import bodyParser from "body-parser";
import express from 'express';
import { connection } from '../config/connection.js'
import cors from 'cors';
import multer  from "multer";

const PORT = 5000;
const app = express();
app.use(cors());
app.use(bodyParser.json());



// find all item in database 
app.get('/testnodeapi', (req, res) => {
    connection.query('select * from testquerytable', (error, result, field) =>{
        if(error) throw error;
        let message = "";
        if(result === undefined || result.length === 0){
            message = "Empty";
        }else{
            message = "Success!";
        }
        return res.send({ error: false, data: result, message: message});
    })
}); 

// get data by conditons with input parameter 
app.get('/selection', (req, res) => {
    let id =  req.query.id; 
    // console.log("show id: ",id);
    // console.log("show query param id: ", req.query.id);
    connection.query("select * from testquerytable where id =" + id, (err, result) => {
        let msg = "";
        if(err){
            msg = err.message;
        }else{
            msg = "Success!";
        }
        return res.send({id:req.query.id, data: result, message:msg});
    })
});



// upload images // 

// set file that images will upload 
 

// set upload images // 
const upload = multer({
    dest: '../imgInput',
    limits:{
        fieldSize: 1000000
    }
});

// รับรูปเข้ามา จาก axios หน้าบ้าน 
app.post('/single-file',upload.single('file'),(req, res)=>{
 
    let log_input = {
         fieldname: req.file?.fieldname,
         originalname: req.file?.originalname,
         encoding: req.file?.encoding,
         mimetype: req.file?.mimetype,
         destination: req.file?.destination,
         filename: req.file?.filename,
         path: req.file?.path,
         size: req.file?.size
    }

    connection.query("insert into upload_log set ?", log_input, (err, result) => {
        if(err){
            return console.log(err.message)
        }else{
            return console.log("insert log success!")
        }
    })  
})


// insert into database 
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