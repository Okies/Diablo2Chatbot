var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {

  console.log('Call Index!');

  res.send('Index Page');
});

module.exports = router;
