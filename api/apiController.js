"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var body_parser_1 = __importDefault(require("body-parser"));
var express_1 = __importDefault(require("express"));
var connection_js_1 = require("../config/connection.js");
var cors_1 = __importDefault(require("cors"));
var multer_1 = __importDefault(require("multer"));
var PORT = 5000;
var app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// find all item in database 
app.get('/testnodeapi', function (req, res) {
    connection_js_1.connection.query('select * from testquerytable', function (error, result, field) {
        if (error)
            throw error;
        var message = "";
        if (result === undefined || result.length === 0) {
            message = "Empty";
        }
        else {
            message = "Success!";
        }
        return res.send({ error: false, data: result, message: message });
    });
});
// get data by conditons with input parameter 
app.get('/selection', function (req, res) {
    var id = req.query.id;
    // console.log("show id: ",id);
    // console.log("show query param id: ", req.query.id);
    connection_js_1.connection.query("select * from testquerytable where id =" + id, function (err, result) {
        var msg = "";
        if (err) {
            msg = err.message;
        }
        else {
            msg = "Success!";
        }
        return res.send({ id: req.query.id, data: result, message: msg });
    });
});
// upload images // 
// set file that images will upload 
// set upload images // 
var upload = (0, multer_1.default)({
    dest: '../imgInput',
    limits: {
        fieldSize: 1000000
    }
});
// รับรูปเข้ามา จาก axios หน้าบ้าน 
app.post('/single-file', upload.single('file'), function (req, res) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    var log_input = {
        fieldname: (_a = req.file) === null || _a === void 0 ? void 0 : _a.fieldname,
        originalname: (_b = req.file) === null || _b === void 0 ? void 0 : _b.originalname,
        encoding: (_c = req.file) === null || _c === void 0 ? void 0 : _c.encoding,
        mimetype: (_d = req.file) === null || _d === void 0 ? void 0 : _d.mimetype,
        destination: (_e = req.file) === null || _e === void 0 ? void 0 : _e.destination,
        filename: (_f = req.file) === null || _f === void 0 ? void 0 : _f.filename,
        path: (_g = req.file) === null || _g === void 0 ? void 0 : _g.path,
        size: (_h = req.file) === null || _h === void 0 ? void 0 : _h.size
    };
    connection_js_1.connection.query("insert into upload_log set ?", log_input, function (err, result) {
        if (err) {
            return console.log(err.message);
        }
        else {
            return console.log("insert log success!");
        }
    });
});
// insert into database 
app.post('/add', function (req, res) {
    var email = req.body.email;
    var desc = req.body.desc;
    if (email.length === 0 || desc.length === 0 || email === undefined || desc === undefined) {
    }
    else {
        var from_input = {
            email: email,
            desc: desc
        };
        connection_js_1.connection.query("insert into testdesc set ?", from_input, function (err, result) {
            if (err) {
                return console.log("error:", err.message);
            }
            else {
                return console.log("Add success add.");
            }
        });
    }
});
app.listen(PORT, function () { return console.log("Serve is running at port " + PORT); });
