var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/user', (req, res, next) =>{
  res.send('{"err": "密码不正确"}');
  next();
})

module.exports = router;
