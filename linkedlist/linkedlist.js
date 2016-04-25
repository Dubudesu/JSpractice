
"use strict";
//simple single linked list

let node = function node() {
    
    //private
    var body = "";
    var next = {};
    
    //public
    return {
        
        body,
        next,
        
        init(b,n) {
            
            body = b;
            if(n){
                next = n;
            } else { next = null; }
            
            return this;
        },
        
        getBody(){
          
            return body;
        },
    };
};


let linkedlist = function linkedlist() {
    
    var tail = node().init("Tail", null);
    var head = node().init("Head", tail);
    
    return {
    
        traverse() {
         
            var tmp = head;
        
            do {
                console.log(tmp.getBody() );
                tmp = tmp.next;
            } while(tmp)
        },
        
        insertAtEnd(n)  {
            
            console.log(Object.prototype.hasOwnProperty.call(n, 'body'));
        
            if( Object.prototype.toString.call(n, 'body') ){
                
                var tmp = head;
                
                while(tmp.next.next){
                    tmp = tmp.next;
                }
                console.log("inserting node...")
                node.next = tmp.next;
                tmp.next = node;
            } else {
            
                console.log('That doesn\'t seem to be a node you\'re trying to add to the linked list..');
            }
        }
    };
};

let testlist = Object.create(linkedlist());

testlist.traverse();


testlist.insertAtEnd( node().init("some Thing", null) );

testlist.traverse();