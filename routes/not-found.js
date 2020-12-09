const router = require('express').Router();

router.all('/', (req, res) => {
  res.send(404, { message: 'Запрашиваемый ресурс не найден' });
});

module.exports = router;
