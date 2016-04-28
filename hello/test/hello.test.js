//"use strict";

var test = require('tape');

var hello = require('../hello');

test('Hello should return a string', assert => {
   
    
    var actual = typeof(hello);
    var expected = "String";
     
    assert.equal(actual, expected,
        'Should return a string' );
    
    assert.end();
});