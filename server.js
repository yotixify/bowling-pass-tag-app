var gzippo = require('gzippo');
var express = require('express');
//var expressLogger = require('express-logger');
var app = express();

  //app.use(expressLogger({path: "log.txt"}));
  app.use(gzippo.staticGzip("" + __dirname + "/dist"));
  app.listen(process.env.PORT || 5000);
