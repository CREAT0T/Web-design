
var express = require('express');           //使用express
var router = express.Router();               //放数据
/* GET home page. */

router.post('/', function (req, res, next) {
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
    var sql = "select * from user";
    db.query(sql, function (err, data) {
        console.log(data);
        if (err) {
            console.log("数据库访问出错", err);
            res.send('0');
        } else {
            var flag = 0;
            for(let i = 0; i < data.length; i++) {
                if (u.user === data[i].name && u.password === data[i].password) {
                    res.send(data[i]);
                    flag = 1;
                    break;
                }
            }
            if(flag === 1){
                console.log('用户存在');
            }else{
                res.send('0');
            }
        }
    });
    db.end();
});

module.exports = router;