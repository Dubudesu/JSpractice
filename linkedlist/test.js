

var test = require('tape');


test('Traverse() output content', assert => {
   
    
    var L = linkedList();
    
    var actual = L.traverse();
    var expected = ["Head", "Tail"];
    
    assert.equal(actual, expected,
         'Traverse() should return an array of expected printed content' );
    
    assert.end();
    
});