var express = require('express');
var auth = require('../routes/auth');
var router = express.Router();

var Company = require('../models/company')
var Vacancy = require('../models/vacancy')

/* GET /companies listing. */
router.get('/', function(req, res, next) {
  Company.find(function(err, companies){
    if (err) return next(err);

    res.json(companies);
  });
});

/* GET /companies/:id */
router.get('/:id', function(req, res, next) {
  Company.findById(req.params.id, function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/* GET /companies/:id/vacancies */
router.get('/:id/vacancies', function(req, res, next) {
  Vacancy.find({_company : req.params.id}, function(err, vacancies){
    if (err) return next(err);

    res.json(vacancies);
  });
});

module.exports = router;
