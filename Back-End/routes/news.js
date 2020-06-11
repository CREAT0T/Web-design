var express = require('express');           //使用express
var router = express.Router();               //放数据

var moment = require('moment');
/* GET home page. */

router.get('/', function (req, res, next) {
    console.log('发送成功');
    const mysql = require("mysql");
    const db=mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "admin",
        database: "webdesign"
    });
    db.connect();
    var sql = 'select * from news';
    db.query(sql,function (err,data) {
        if (err) {
            console.log("数据库访问出错", err);
            res.send('');
        } else {
            res.send(data);
        }
    });
    db.end();
});

module.exports = router;