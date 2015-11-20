var mongoose = require('mongoose');

var VacancySchema = new mongoose.Schema({
  _company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  position: String,
  description: String,
  location: String,
  salary: Number,
  expiry: Date,
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Vacancy', VacancySchema);
