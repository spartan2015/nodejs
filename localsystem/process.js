/**
 */
// because stdin is paused until we resume it
process.stdin.resume();
process.stdin.setEncoding("utf8");

process.stdin.on('data', function(chunk){
   process.stdout.write("data: " + chunk);
});

process.stdin.on('end',function(){
    process.stderr.write("End\n!")
});

process.on("SIGTERM",function(){
    console.stderr.write("Sigterm received\n");
});

console.log("Node is running as process #" +process.pid);