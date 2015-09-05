var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('public/index.html', { root: __dirname });
});

app.get('/data.json', function (req, res) {
  setTimeout(function() {
    res.json({data: "Slow Data just arrived"});
  }, 2000);
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
