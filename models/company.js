var mongoose = require('mongoose');

var CompanySchema = new mongoose.Schema({
  name: String,
  industry: String,
  address: String,
  telephone: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Company', CompanySchema);
