const express = require('express');
const mongoose = require('mongoose');

const app = express();
const bodyParser = require('body-parser');
const router = require('./routes/not-found.js');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');

const { PORT = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.use((req, res, next) => {
  req.user = {
    _id: '6000396e8a95b71a0cda8229',
  };

  next();
});
app.use(bodyParser.json());
app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use('*', router);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Alive at port:', PORT);
});
