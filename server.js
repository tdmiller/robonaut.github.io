const server = require('./webpack/webpack.server');

const PORT = process.env.PORT || 3000;
server().listen(PORT, '0.0.0.0', function(err, result) {
  if (err) {
    return console.log(err);
  }
  console.log(`Listening at http://localhost:${PORT}`);
});
