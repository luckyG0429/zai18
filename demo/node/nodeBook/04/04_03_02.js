//事件订阅/发布
var http = require('http');

var options = {
  host:'www.google.com',
  port:80,
  path:'/upload',
  method:'POST'
};

var req = http.request(options,function(res){
  console.log('status:'+res.statusCode);
  console.log('HEADERS:'+res.stringify(res.headers));
  res.setEncoding('utf8');
  res.on('data',function(chunk){
    console.log('BODY:'+chunk);
  });
  res.on('end',function(){
    //TODO
  })
});

req.on('error',function(e){
  console.log('problem with request : '+ e.message);
})

req.write('data\n');
req.write('data\n');
req.end();
