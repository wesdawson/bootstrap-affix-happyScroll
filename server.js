var express = require('express');
var path = require('path');
var app = express();


app.use(express.static(path.join(__dirname, '/public')));
app.use('/public/js', express.static(path.join(__dirname, '/public/js')));
app.use('/public/stylesheets', express.static(path.join(__dirname, '/public/stylesheets')));

app.get('/', function(req, res) {
    res.sendfile('./public/views/happyScroll.html');
});
 
app.listen(3000);
console.log("You are listening on localhost:3000");