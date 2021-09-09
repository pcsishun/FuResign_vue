import mysql from 'mysql';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const HOST = process.env.HOST;
const USER = process.env.USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;


const config = {
    host: HOST,
    user:  USER,
    password: PASSWORD,
    database: DATABASE

};

export const connection = mysql.createConnection(config);  
connection.connect(function(err){
  if (err){
    console.log('error connecting:' + err.stack);
  }
  console.log('connected successfully.');
});

 