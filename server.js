var express=require('express');
var app=express();
app.get('/',function(req,res)
{
	console.log(req.headers);
	var regex=/\(([^)]+)\)/g;
	var headers={'ipaddress':req.headers["x-forwarded-for"],
	'language':req.headers['accept-language'],'software':regex.exec(req.headers['user-agent'])[1]};
	res.send(JSON.stringify(headers));
});
app.listen(8080);
