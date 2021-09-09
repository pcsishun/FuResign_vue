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
var PORT = process.env.PORT;
var app = (0, express_1.default)();
app.use(body_parser_1.default.json());
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
