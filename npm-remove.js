var sys = require('sys')
var exec = require('child_process').exec;
function puts(error, stdout, stderr) {
    sys.puts(stdout)
}

['@fabric-fs-refapp/refapp-ui-config','@fabric-fs-refapp/fsrefapp.tradereport','@store/tradeperimeter','@store/currentdraftcontext'].forEach(function (package) {
    console.log("npm show " + package + " versions");
    exec("npm show " + package + " versions --registry http://fr1csluxp0003:4873",
        function (error, stdout, stderr) {
            if (!error) {
                console.log("ar: " + stdout);
                if (stdout.trim().length == 0){
                    return;
                }
                var ar = JSON.parse(stdout.replace(/'/g, '"'));
                ar.forEach(function (version) {
                    console.log("npm unpublish " + package + "@" + version);

                    exec("npm unpublish " + package + "@" + version + " --registry http://fr1csluxp0003:4873", function (e, s) {
                        if (e) {
                            console.error(e);
                        }
                        console.log(s);
                    });
                });
            } else {
                console.log('error' + error);
            }
        }
    );
});
