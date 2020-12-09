const express = require('express');

const app = express();
const path = require('path');
const router = require('./routes/not-found.js');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cardsRouter);
app.use('/', usersRouter);
app.use('*', router);
app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log('Alive at port:', PORT);
});
