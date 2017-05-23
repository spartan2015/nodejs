var http = require("http"), fs = require('fs');
var counter = 0;
http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type" :"application/json"
   ,"Access-Control-Allow-Origin" :"http://localhost:3000"
   ,"Access-Control-Allow-Credentials" :"true"
   ,"Access-Control-Allow-Headers" :"Access-Token,Content-Type"
   ,"Access-Control-Allow-Access-Token" :"true"
   ,"Access-Control-Expose-Headers" :"Location"
   });
   
   res.write('[{"key":"trade:currency'+counter+'","displayName":"Currency'+counter+'"},{"key":"trade:trader'+counter+'","displayName":"Trader'+counter+'","resourceType":"user"}]');
   counter++;
   res.end();
}).listen(9191);
console.log("server running");