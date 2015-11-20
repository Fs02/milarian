var express = require('express');
var router = express.Router();

var Company = require('../models/company.js')
var Vacancy = require('../models/vacancy.js')

/* GET /companies listing. */
router.get('/', function(req, res, next) {
  Company.find(function(err, companies){
    if (err) return next(err);

    res.json(companies);
  });
});

/* POST /companies */
router.post('/', function(req, res, next) {
  Company.create(req.body, function(err, company){
    if (err) return next(err);

    res.json(company);
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

/* PUT /companies/:id */
router.put('/:id', function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/* DELETE /companies/:id */
router.delete('/:id', function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

module.exports = router;
