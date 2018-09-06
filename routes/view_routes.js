const User = require('../models/User');

module.exports = function(app) {
  app.get('/', (req, res) => {
    User.find({})
      .then(users => {
        res.render('index', {users: users});
      })
      .catch(err => console.log(err));
  });

  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(user => {
        res.redirect('/');
      });
  });

  app.delete('/users/:id', (req, res) => {
    User.deleteOne({ _id: req.params.id})
      .then(() => res.redirect('/'));
  });
}