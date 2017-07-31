var redis = require("redis");
var express = require('express');
var app = express();
var count = 0 ;
var client = redis.createClient(6379,'127.0.0.1');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.use(express.static('test'));

app.get('/', function (req, res) {
    res.sendFile('/home/zhm/student-score-sheet-api-version/test.html');
    count++;
    console.log(count);
    client.set('count',count,redis.print);
});

app.post('/tes',urlencodedParser, function (req,res) {
    var response = {
        "first_name":req.body.txt,
        "last_name":req.body.txt
    };
    client.set('studentInfo',response,redis.print);
    console.log(response);
    res.end(JSON.stringify(response));
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

client.on('connect',function(){

    console.log('count: ' + count);
    console.log('connect');
});

client.on('ready',function(err){
    console.log('ready');
});
