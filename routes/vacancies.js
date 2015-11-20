var express = require('express');
var router = express.Router();

var Vacancy = require('../models/vacancy.js')

/* GET /vacancies listing. */
router.get('/', function(req, res, next) {
  Vacancy.find().
  populate('_company')
  .exec(function(err, vacancies){
    if (err) return next(err);

    res.json(vacancies);
  });
});

/* POST /vacancies */
router.post('/', function(req, res, next) {
  Vacancy.create(req.body, function(err, vacancy){
    if (err) return next(err);

    res.json(vacancy);
  });
});

/* GET /vacancies/:id */
router.get('/:id', function(req, res, next) {
  Vacancy
  .findById(req.params.id)
  .populate('_company').
  exec(function(err, vacancy){
    if (err) return next(err);

    res.json(vacancy);
  });
});

/* PUT /vacancies/:id */
router.put('/:id', function(req, res, next) {
  Vacancy.findByIdAndUpdate(req.params.id, req.body, function(err, vacancy){
    if (err) return next(err);

    res.json(vacancy);
  });
});

/* DELETE /vacancies/:id */
router.delete('/:id', function(req, res, next) {
  Vacancy.findByIdAndRemove(req.params.id, req.body, function(err, vacancy){
    if (err) return next(err);

    res.json(vacancy);
  });
});

module.exports = router;
