
//simple single linked list

let node = function node() {
            
    let body = "";
    let next = {};
    
    return {
        
        init(b,n) {
            
            body = b;
            if(n){
                next = n;
            } else { next = null; }
            
            return this;
        },
        
        getBody() {
            return body;
        },
        
        getNext (){
            return next;
        },
    };
};


let node = function node() {
    
    let tail = node().init("Tail", null);
    let head = node().init("Head", tail);
    
    return {
    
        traverse() {
         
            let tmp = head;
        
            do {
                console.log(tmp.body + "   " + tmp.getBody() );
                tmp = tmp.next;
            } while(tmp)
        },
        
        insert(n) 
        
        
    };
    
    
}

var linkedList = (function() {
    
    var head = node(),
        tail = node();
        
    head.init("Head", tail);
    tail.init("Tail", null );
    
    function traverse(){
        
        var tmp = head;
        
        do {
            console.log(tmp.body + "   " + tmp.getBody() );
            tmp = tmp.next;
        } while(tmp)
    };
    
    function insert( node ){
     
        
        if(!node){
            alert("Can only add a node!")
            return;
        } else {
         
            var tmp = head;
            
            while(tmp.next.next){
                    tmp = tmp.next;
                }
                console.log("inserting node...")
                node.next = tmp.next;
                tmp.next = node;
            }
        
    };
    
    return {
      
        traverse: traverse,
        insert: insert,
        
    };
    

});

testlist = linkedList();

testlist.traverse();

testlist.insert( node().init("some Thing", null) );

testlist.traverse();