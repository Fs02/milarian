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

/* POST /account/register */
router.post('/register/:type?', function(req, res, next) {
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

/* PUT /account/ */
router.put('/', auth.isAuthenticated, function(req, res, next) {
  if (req.user.company != null){
    Company.findByIdAndUpdate(req.user.company, req.body.company, function(err, company){
      if (err) return next(err);
    });
  } else {
    Personal.findByIdAndUpdate(req.user.personal, req.body.personal, function(err, personal){
      if (err) return next(err);
    });
  }

  if (req.body.username)
    req.user.username = req.body.username;
  if (req.body.email)
    req.user.email = req.body.email;
  if (req.body.password)
    req.user.password = req.body.password;

  req.user.save(function(err){
    if (err) return next(err);

    res.json(req.user);
  });
});

module.exports = router;
