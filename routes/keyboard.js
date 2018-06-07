var express = require('express');
var router = express.Router();

router.get('/', (req, res) => {
  var data = {
    'type': 'buttons',
    'buttons': ['선택1', '선택2', '선택3']
  };

  console.log('Call keyboard!');
  res.setHeader('Content-Type', 'application/json');
  res.json(data);
});

module.exports = router;
