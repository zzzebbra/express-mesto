const express = require('express');
const app = express();
const path = require('path');
const cardRouter = require('./routes/cards.js');
const cardsRouter = require('./routes/cards.js');
const usersRouter = require('./routes/users.js');

const { PORT = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', cardsRouter);

app.listen(PORT, () => {
  console.log('Alive')
});


