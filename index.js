var express = require('express')
  , geoip = require('geoip-lite');

var app = express();

app.get('/search', function (req, res, next) {
  var ip = req.query.ip || req.ip
    , result = geoip.lookup(ip);

  res.json(result);
});

app.listen(process.argv[2] || 5000);
