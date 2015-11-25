var mongoose = require('mongoose');

var ApplicationSchema = new mongoose.Schema({
  personal: { type: mongoose.Schema.Types.ObjectId, ref: 'Personal' },
  vacancy: { type: mongoose.Schema.Types.ObjectId, ref: 'Vacancy' },
  cover_letter: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', ApplicationSchema);
