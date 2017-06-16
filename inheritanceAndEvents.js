var util = require("util");
var EventEmitter = require("events").EventEmitter;

function Resource(){
    var self = this;
    process.nextTick(function(){
       self.emit("start"); 
    });    
}

util.inherits(Resource, EventEmitter);


var r = new Resource();
r.once("start", function(){
    console.log("start")
});


module.exports = Resource