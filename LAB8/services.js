var http = require("http")
 http
 .createServer(function(red, res){
   res .writeHead(200,  {"Content-Type": "text/plain"})
   res.write("Hallo");
   res.end();
 })
 .listen(3000);