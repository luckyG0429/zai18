
       //node创建一个web服务器，并监听8080端口
       //对于服务器，我们
       var http = require('http');
       var querystring = require('querystring');


       http.createServer(function(req,res){
        var postData = '';
        req.setEncoding('utf-8');
        req.on('data',function(trunk){
          postData += trunk;
        });
        req.on('end',function(){
          res.end(postData)
        })
       }).listen(9090);

       console.log('服务器开启');
 
