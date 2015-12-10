var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin', { layout: 'layout_admin.hbs', title: 'Milarian - Administration' });
});

module.exports = router;
