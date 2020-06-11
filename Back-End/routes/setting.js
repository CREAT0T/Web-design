var express = require('express');           //使用express
var router = express.Router();               //放数据
/* GET home page. */

router.post('/', function (req, res, next) {
    console.log('发送成功');
    const mysql = require("mysql");
    const db=mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "admin",
        database: "webdesign"
    });
    let u = req.body;
    console.log(u);
    db.connect();
    var sql = 'update user set nickname= '+'\''+u.nickname+'\''+',password ='+'\''+u.password+'\''+',gender='+'\''+u.gender+'\''+',mail='+'\''+u.mail+'\''+',address='+'\''+u.address+'\''+' where name='+'\''+u.name+'\'';
    db.query(sql, function (err) {
        if (err) {
            console.log("数据库访问出错", err);
            res.send('0');
        } else {
            res.send('1');
        }
    });
    db.end();
});

module.exports = router;