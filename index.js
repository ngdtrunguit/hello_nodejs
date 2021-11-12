var express = require('express');
var app = express();
app.get('home', function (req, res) {
    res.send('Hello world a');
});
app.listen(3000, function(){
    console.log('Example app listing on port 3000!');
});
