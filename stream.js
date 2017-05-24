"use strict";

var EventEmitter=require("events").EventEmitter;

var emitter = new EventEmitter();


emitter.once("item", function(data){
    console.log(data.prop);
})

emitter.emit("item", {prop: "val"});

