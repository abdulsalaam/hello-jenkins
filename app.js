var express = require('express');
 
var app = express();
 
app.get('/', function (req, res) {
  res.send('hello world:good');
});

var port =  (process.env.PORT || 5000) 
app.listen(port);
console.log('Server started on port:'+port)
console.log('Stop  server command: Ctl+c')
console.log('Abdul Salaam 100'); 
module.exports = app;
