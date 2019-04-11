const server = require('./webpack/webpack.server');

server().listen(process.env.PORT || 3000, '0.0.0.0', function(err, result) {
  if (err) {
    return console.log(err);
  }
  console.log('Listening at http://localhost:3000/');
});
