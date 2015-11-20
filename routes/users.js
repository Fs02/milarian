var express = require('express');
var router = express.Router();

var User = require('../models/user')

/* POST users/ */
router.post('/', function(req, res, next) {
  User.create(req.body, function(err, user){
    if (err) return next(err);

    res.json(user);
  });
});

module.exports = router;
