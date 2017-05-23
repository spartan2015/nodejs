var http = require("http"), fs = require('fs');
http.createServer(function(req,res){
   res.writeHead(200,{"Content-Type" :"application/json"
   ,"Access-Control-Allow-Origin" :"http://localhost:3000"
   ,"Access-Control-Allow-Credentials" :"true"
   ,"Access-Control-Allow-Headers" :"Access-Token,Content-Type"
   ,"Access-Control-Allow-Access-Token" :"true"
   ,"Access-Control-Expose-Headers" :"Location"
   });
   
   var path = process.argv[2];
   var file = fs.createReadStream(path);
   file.on('data', res.write.bind(res));
    file.on('close', function() {
      res.end();
    });
    file.on('error', function(error) {
      self.sendError_(req, res, error);
    });
}).listen(9191);
console.log("server running");