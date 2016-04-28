"use strict";
let hello = function( str ) {
 
    var h = "hello ".concat(str);
    console.log(typeof(h));
    
    return h;
}

hello("fag");