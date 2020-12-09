const userRouter = require('express').Router();
const users = require('../data/user.json');

userRouter.get('/users/:id', (req, res) => {
  if (users.some((el) => el._id === req.params.id)) {
    const reqUser = users.find((user) => (user._id === req.params.id));
    res.send(reqUser);
    return;
  }

  res.send(404, { message: 'Нет пользователя с таким id' });
});

userRouter.get('/users', (req, res) => {
  res.send(users);
});

module.exports = userRouter;
