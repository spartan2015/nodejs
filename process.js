// global process variable

/*
process.stdout;
process.stdin;
process.stderr;
*/
console.log(process.argv[1]);

console.log(process.platform);
console.log(process.arch);

console.log(process.cwd());

console.log(process.config);

console.log(process.getgid());
console.log(process.getuid());

console.log(process.maxTickDepth);
console.log(process.nextTick(function(){
    console.log("next");
}));