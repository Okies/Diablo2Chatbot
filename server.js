var express = require('express');

var index = require('./routes/index');
var keyboard = require('./routes/keyboard');

var app = express();

app.use('/script', express.static(__dirname + '/script'));

app.use('/', index);
app.use('/keyboard', keyboard);

app.use((req, res, next) => {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.listen(3000, () => {
  console.log('Express App on port 3000');
});
