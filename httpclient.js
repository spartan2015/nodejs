var request = require("request");
request('http://www.pluralsight.com',function(error, response, body){
    console.log(body);
});