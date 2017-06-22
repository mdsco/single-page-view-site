const express = require('express');
const path = require('path');
const sassMiddleware = require('node-sass-middleware');

var srcPath = __dirname + '/assets/styles';
var destPath = __dirname + '/assets/styles';

const app = express();

var index = require('./routes/index');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use('/styles', 
  sassMiddleware({
      src: srcPath,
      dest: destPath,
      debug: true,
      outputStyle: 'expanded'
  })
);

app.use('/styles', sassMiddleware({
  src: srcPath,
  dest: destPath,
  debug: true,
  outputStyle: 'expanded'
}));

app.use(express.static(path.join(__dirname, 'assets')));

app.use('/', index);

app.listen(3000);

module.exports = app;
