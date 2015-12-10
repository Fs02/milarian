var express = require('express');
var auth = require('../routes/auth');
var router = express.Router();

var Vacancy = require('../models/vacancy')
var Company = require('../models/company')
var Personal = require('../models/personal')
var User = require('../models/user')
var Application = require('../models/application')

/* GET /vacancies listing. */
router.get('/vacancies/', function(req, res, next) {
  Vacancy.find()
  .populate('_company')
  .exec(function(err, vacancies){
    if (err) return next(err);

    res.json(vacancies);
  });
});

/* POST /vacancies */
router.post('/vacancies/', function(req, res, next) {
  var vacancy = new Vacancy(req.body);
  vacancy.save(function(err){
    if (err) return next(err);

    res.json(vacancy);
  });
});

/* GET /vacancies/:id */
router.get('/vacancies/:id', function(req, res, next) {
  Vacancy
  .findById(req.params.id)
  .populate('_company')
  .exec(function(err, vacancy){
    if (err) return next(err);

    res.json(vacancy);
  });
});

/* PUT /vacancies/:id */
router.put('/vacancies/:id', function(req, res, next) {
  Vacancy.findByIdAndUpdate(req.params.id, req.body, function(err, vacancy){
    if (err) return next(err);

    res.json(vacancy);
  });
});

/* DELETE /vacancies/:id */
router.delete('/vacancies/:id', function(req, res, next) {
  Vacancy.findByIdAndRemove(req.params.id, req.body, function(err, vacancy){
    if (err) return next(err);

    res.json(vacancy);
  });
});

/************************* Company ***********************/

/* GET /companies listing. */
router.get('/companies/', function(req, res, next) {
  User.find({ roles: 'company' })
  .populate('company')
  .exec(function(err, companies){
    if (err) return next(err);

    res.json(companies);
  });
});

/* POST /companies */
router.post('/companies/', function(req, res, next) {
  console.log(req.body);
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
});

/* GET /companies/:id */
router.get('/companies/:id', function(req, res, next) {
  User
  .findById(req.params.id)
  .populate('company')
  .exec(function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/* PUT /companies/:id */
router.put('/companies/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/* DELETE /companies/:id */
router.delete('/companies/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/************************* Personal ***********************/

/* GET /personals listing. */
router.get('/personals/', function(req, res, next) {
  User.find({ roles: 'personal' })
  .populate('personal')
  .exec(function(err, personals){
    if (err) return next(err);

    res.json(personals);
  });
});

/* POST /personals */
router.post('/personals/', function(req, res, next) {
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
});

/* GET /personals/:id */
router.get('/personals/:id', function(req, res, next) {
  User
  .findById(req.params.id)
  .populate('personal')
  .exec(function(err, personal){
    if (err) return next(err);

    res.json(personal);
  });
});

/* PUT /personals/:id */
router.put('/personals/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, personal){
    if (err) return next(err);

    res.json(personal);
  });
});

/* DELETE /personals/:id */
router.delete('/personals/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function(err, personal){
    if (err) return next(err);

    res.json(personal);
  });
});

module.exports = router;
