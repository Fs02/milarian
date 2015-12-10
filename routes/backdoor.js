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
  vacancy._company = req.user.company;
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
  Company.find()
  .exec(function(err, companies){
    if (err) return next(err);

    res.json(companies);
  });
});

/* POST /companies */
router.post('/companies/', function(req, res, next) {
  var company = new Company(req.body);
  company.save(function(err){
    if (err) return next(err);

    res.json(company);
  });
});

/* GET /companies/:id */
router.get('/companies/:id', function(req, res, next) {
  Company
  .findById(req.params.id)
  .exec(function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/* PUT /companies/:id */
router.put('/companies/:id', function(req, res, next) {
  Company.findByIdAndUpdate(req.params.id, req.body, function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/* DELETE /companies/:id */
router.delete('/companies/:id', function(req, res, next) {
  Company.findByIdAndRemove(req.params.id, req.body, function(err, company){
    if (err) return next(err);

    res.json(company);
  });
});

/************************* Personal ***********************/

/* GET /personals listing. */
router.get('/personals/', function(req, res, next) {
  Personal.find()
  .exec(function(err, personals){
    if (err) return next(err);

    res.json(personals);
  });
});

/* POST /personals */
router.post('/personals/', function(req, res, next) {
  var personal = new Personal(req.body);
  personal.save(function(err){
    if (err) return next(err);

    res.json(personal);
  });
});

/* GET /personals/:id */
router.get('/personals/:id', function(req, res, next) {
  Personal
  .findById(req.params.id)
  .exec(function(err, company){
    if (err) return next(err);

    res.json(personal);
  });
});

/* PUT /personals/:id */
router.put('/personals/:id', function(req, res, next) {
  Personal.findByIdAndUpdate(req.params.id, req.body, function(err, personal){
    if (err) return next(err);

    res.json(personal);
  });
});

/* DELETE /personals/:id */
router.delete('/personals/:id', function(req, res, next) {
  Personal.findByIdAndRemove(req.params.id, req.body, function(err, personal){
    if (err) return next(err);

    res.json(personal);
  });
});

/************************* User ***********************/

/* GET /users listing. */
router.get('/users/', function(req, res, next) {
  User.find()
  .exec(function(err, companies){
    if (err) return next(err);

    res.json(companies);
  });
});

/* POST /users */
router.post('/users/', function(req, res, next) {
  var user = new Company(req.body);
  user.save(function(err){
    if (err) return next(err);

    res.json(user);
  });
});

/* GET /users/:id */
router.get('/users/:id', function(req, res, next) {
  User
  .findById(req.params.id)
  .exec(function(err, user){
    if (err) return next(err);

    res.json(user);
  });
});

/* PUT /users/:id */
router.put('/users/:id', function(req, res, next) {
  User.findByIdAndUpdate(req.params.id, req.body, function(err, user){
    if (err) return next(err);

    res.json(user);
  });
});

/* DELETE /users/:id */
router.delete('/users/:id', function(req, res, next) {
  User.findByIdAndRemove(req.params.id, req.body, function(err, user){
    if (err) return next(err);

    res.json(user);
  });
});

module.exports = router;
