"use strict";

var EventEmitter=require("events").EventEmitter;
process.
function Resource(){
    var emitter = new EventEmitter();
    // on next tick of the event loop - like Swing.invokeLater
    process.nextTick(function(){
        emitter.emit("item", {prop: "val"});    
    });
    
    return emitter;
}

var f = new Resource();

f.once("item", function(data){
    console.log(data.prop);
})


// ReadableStream
var request = require("request");
var site = "http://www.pluralsight.com";
var s = request(site);

s.pipe(process.stdout); // pipe from ReadableStream to WriteableStream

var fs = request("fs");
s.pipe(fs.createWriteStream("somefile.html"));


var zlib = require("zlib");
request(site).pipe(zlib.createGzip()).pipe(fs.createWriteStream("zipped.gz"));


s.on("data", function(chunk){
    console.log("chunk" + chunk);
});

s.on("end", function(){
   console.log("end"); 
});


//writable stream
process.stdout.write("hello", "UTF-8", function(){console.log("done");});