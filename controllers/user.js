const User = require('../models/user');

exports.deleteUser = (req, res, next) => {
  User.deleteOne({ _id: req.auth.userId })
  .then(() => res.status(200).json({ message: 'Utilisateur supprimé' }))
  .catch(error => res.status(400).json({ error }));
};

exports.updateUsername = (req, res, next) => {
  User.updateOne({ _id: req.auth.userId }, { username: req.body.username })
  .then(() => res.status(200).json({ message: 'Username update' }))
  .catch(error => res.status(400).json({ error }));
};