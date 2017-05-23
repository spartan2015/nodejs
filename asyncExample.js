"use strict";

var evenDouble = function(v, callback){
    var start = new Date();    
   setTimeout(function(){
        var end  = new Date();
        var time = end.getTime() - start.getTime();
        
       if (v % 2 == 0){
           callback.call(null, 1, v*2, time);
       }else{
           callback.call(null, 0, -1, time);
       }
   },generateNumber(1,10) * 100); 
}

function generateNumber(start,end){
    return Math.floor(Math.random() * end) + start  ;
}

var handler =  function(err,result,time){
    if (err){
        console.log("ERR");
    }else{
        console.log("result: " + result + " in " + time + "ms");
    };
}; 
    
for(let i = 0; i < 10; i++)    {
    evenDouble(i,handler);
}
