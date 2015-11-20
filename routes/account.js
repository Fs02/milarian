var express = require('express');
var auth = require('../routes/auth');
var router = express.Router();

var User = require('../models/user')
var Company = require('../models/company')
var Personal = require('../models/personal')
var Vacancy = require('../models/vacancy')

/* GET /account */
router.get('/', auth.isAuthenticated, function(req, res, next) {
  User.findById(req.user._id)
  .populate('company')
  .populate('personal')
  .exec(function(err, user){
    if (err) return next(err);

    res.json(user);
  });
});

/* POST /accounts/register */
router.post('/register/:type', function(req, res, next) {
  // Save company as user profile if type is company otherwise personal
  if (req.params.type === 'company'){
    Company.create(req.body.company, function(err, company){
      if (err) return next(err);

      req.body.company = company;
      User.create(req.body, function(err, user){
        if (err) {
          company.remove();
          return next(err);
        }

        console.log(user);

        res.json(user);
      });
    });
  } else {
    Personal.create(req.body.personal, function(err, personal){
      if (err) return next(err);

      req.body.personal = personal;
      User.create(req.body, function(err, user){
        if (err) {
          personal.remove();
          return next(err);
        }

        res.json(user);
      });
    });
  }
});

module.exports = router;
