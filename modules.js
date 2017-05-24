// each file is its own file

var os = require("os"); // there is a os.js readlily accesible (sort of in the classpath)
// var someLocal = require("./someFun"); // current folders (./) has someFun.js

var toMb = function(f){
    return Math.round((f/1024/1024));
}

console.log("hostname: " + os.hostname());
console.log("loadavg: " + os.loadavg()[2]);
console.log("freemem: " + toMb(os.freemem()));
console.log("totalmem: " + toMb(os.totalmem()));

// exporting for accessing in another modules when using required
modules.exports.toMb = toMb;