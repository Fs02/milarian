var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

// User schema
var UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  personal: { type: mongoose.Schema.Types.ObjectId, ref: 'Personal' },
  company: { type: mongoose.Schema.Types.ObjectId, ref: 'Company' },
  roles: { type: String, default: 'personal' }
});

UserSchema.methods.verifyPassword = function(password, callback){
  bcrypt.compare(password, this.password, function(err, isMatch){
    if (err) return callback(err);

    callback(null, isMatch);
  });
};

// Callback before each user.save() call
UserSchema.pre('save', function(callback){
  var user = this;

  // Check user role
  if (user.company != null) {
    user.roles = "company";
  }

  // Hash password
  // Break out if the password hasn't changed
  if (!user.isModified('password')) return callback();

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function(err, salt){
    if (err) return callback(err);

    bcrypt.hash(user.password, salt, null, function(err, hash){
      if (err) return callback(err);
      user.password = hash;
      callback();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
