var mongoose = require('mongoose');

var PersonalSchema = new mongoose.Schema({
  firstname: String,
  middlename: String,
  lastname: String,
  birthdate: Date,
  address: String,
  telephone: String,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Personal', PersonalSchema);
