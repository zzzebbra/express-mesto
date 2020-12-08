const userRouter = require('express').Router();
const users = require('../data/user.json');

userRouter.get('/users/:id', (req, res) => {
  if (!users[req.params.id]) {
    res.send(404, {message: 'Нет пользователя с таким id'})
    return;
  }

  const user = users[req.params.id];
  res.send(user);
})

userRouter.get('/users', (req, res) => {
  res.send(users);
  return;
});

module.exports = userRouter;
