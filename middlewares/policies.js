module.exports = {
  user: function(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      return res.sendStatus(401);
    }
  },

  admin: function(req, res, next) {
    if (req.user && req.user.role == 'admin') {
      return next();
    } else {
      return res.sendStatus(401);
    }
  }
}
