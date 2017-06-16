
var obj = {
    prop1 : "val1",
    f1 : function A(){
        
    }
};
// REALLY USEFULL ONE

console.dir(obj);

// not in node - but in browser
//console.log(console.count("a counter"));

console.error("error");
console.info("info");
console.trace("asd");
console.warn("warn");

/**
console.group();
console.info("Hello")
console.groupEnd();
console.groupCollapsed();
console.info("World")
console.groupEnd();
*/

var name = "timer starts";
console.time(name);
var result = console.timeEnd(name);
console.log(result);


console.assert(true === false, "ups");