/**
 * rename
 * truncte
 * chown
 * fchown
 * lchown
 * chmod
 * fchmod
 * lchmod
 * stat
 * fstat
 * lstat
 * link
 * symlink
 * readlink
 * realpath
 * unlink
 * rmdir
 * mkdir
 * readdir
 * close
 * open
 * utimes
 * futimes
 * fsync
 * write
 * read
 * readFile
 * writeFile
 * appendFile
 *
 * fs.readdir(path,callback);
 * fs.readdirSync(path);
 *
 * fs.createReadStream() return fs.ReadStream
 * fs.createWriteStream() returns fs.WriteStream
 *
 * Watch file for changes
 *
 * fs.watch() - returns a fs.FSWatcher (an EventEmitter)
 */
var fs = require("fs");
if (fs.existsSync("temp")) {
    console.log("Directory exists, removing");
    if (fs.existsSync("temp/new.txt")) {
        fs.unlink("temp/new.txt");
    }
}
fs.mkdir('temp');
if (fs.existsSync('temp')){
    process.chdir('temp');
    fs.writeFileSync('test.txt','this is some content for the file');
    fs.renameSync('test.txt','new.txt');
    console.log('File has size: ' + fs.statSync('new.txt').size + ' bytes');
    console.log('File contents: ' + fs.readFileSync('new.txt').toString());
}


