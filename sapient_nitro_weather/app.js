'use strict';
var express = require("express");
var app = express();
var router = express.Router();
var async = require('async');
var request = require('request');
var path = __dirname + '/views/';
var fs = require('fs');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use('/static', express.static('views'));



router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
});

router.get("/",function(req,res){
    res.sendFile(path + "JabongSurvey.html");
});

router.post('/postdata', function(req, res){ 
	req.body.q1;
	req.body.q2;
	req.body.q3;
	req.body.q4;
	req.body.q5;
	req.body.q6;
	req.body.q7;
	req.body.q8;
	req.body.q9;
	req.body.q10;
	req.body.q11;
	req.body.q12;
	req.body.q13;
	req.body.q14;
	req.body.q15;
	//res.send(req.body);
	//var body = ''; 
	var filePath = __dirname + '/views/data.txt'; 
	var dataToWrite = {
		
		'data': req.body
	}	

	var dataToWrite = JSON.stringify(dataToWrite);

	fs.appendFile(filePath, dataToWrite, function() { 
			//res.end(); 
			res.send(req.body);
	});	
	
	// req.on('data', function(data) { body += data; }); 
	// req.on('end', function (){ 
	// 	fs.appendFile(filePath, body, function() { 
	// 		res.end(); 
	// 		res.send(req.body);
	// 	}); 
	// });
})




app.use("/",router);

app.listen(3000,function(){
    console.log("Live at Port 3000");
});
