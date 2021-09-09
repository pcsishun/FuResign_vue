"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
var mysql_1 = __importDefault(require("mysql"));
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '../.env' });
var HOST = process.env.HOST;
var USER = process.env.USER;
var PASSWORD = process.env.PASSWORD;
var DATABASE = process.env.DATABASE;
var config = {
    host: HOST,
    user: USER,
    password: PASSWORD,
    database: DATABASE
};
exports.connection = mysql_1.default.createConnection(config);
exports.connection.connect(function (err) {
    if (err) {
        console.log('error connecting:' + err.stack);
    }
    console.log('connected successfully.');
});
