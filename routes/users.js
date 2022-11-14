var express = require('express');
var router = express.Router();

const userController = require('../controller/userController');
const authController = require('../controller/auth.controller');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/create', userController.createUser);
router.post('/all', userController.findUser);
router.post('/login', userController.loginUser);

router.get('/all',authController.validateJWT, userController.findUser);

module.exports = router;
