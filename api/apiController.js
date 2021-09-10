"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var dotenv_1 = __importDefault(require("dotenv"));
var connection_js_1 = require("../config/connection.js");
// const config = require('../config/connection.js')
// const connection = config.connection;
dotenv_1.default.config({ path: '../.env' });
// const PORT = process.env.PORT;
var PORT = 5000;
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
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
app.get('/testnodeapi', function (req, res) {
    connection_js_1.connection.query('select * from testquerytable', function (error, result, field) {
        if (error)
            throw error;
        var message = "";
        if (result === undefined || result.length === 0) {
            message = "Empty";
        }
        else {
            message = "Success";
        }
        return res.send({ error: false, data: result, message: message });
    });
});
app.listen(PORT, function () { return console.log("Serve is running at port " + PORT); });
