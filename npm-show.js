var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

[
    'grunt'
].forEach(function (package) {
    console.log("npm show " + package + " versions");
    exec("npm show " + package + " versions --registry http://a:4873",
        (function(package){
        return function (error, stdout, stderr) {
            if (!error) {
                console.log(package + ": " + stdout);
                if (stdout.trim().length == 0){
                    return;
                }
            } else {
                console.log('error' + error);
            }
        };})(package)
    );
});
