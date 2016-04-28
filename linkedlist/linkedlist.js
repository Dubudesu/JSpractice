
"use strict";

let node = function node() {
    
    //private
    var body = {};
    var next = {};
    var prev = {};
    
    //public
    return {
        
        init(b,n,p) {
            
            if(b){
                body = b;
            } else {
                return
            }
            
            if(n){
                next = n;
            } else { 
                next = null; 
            }
            
            if(p){
                prev = p;
            } else { 
                prev = null; 
            }
            
            return this;
        },
        getBody() {
          
            return body;
        },
        setBody(b) {
        
            body = b;
        },
        getNext() {
          
            return next;
        },
        setNext(n) {
          
            next = n;
        },
        getPrev() {
        
            return prev;
        },
        setPrev(p) {
         
            prev = p;
        }
        
        
    };
};

let linkedList = function() {
 
    let head = node();
    let tail = node();
    
    head.init("Head", tail, null);
    tail.init("Tail", null, head);
    
    let insert = function(node, next, prev) {
            
        node.setNext( next);
        node.setPrev( prev );
        
        next.setPrev( node )
        prev.setNext( node );
    }
    
    let isEmpty = function(){
     
        if(head.getNext().getBody() === "Tail" ){
            return true;
        } else { 
            return false; 
        }
    }
    
    
    return{
        
        traverse() {
            
            var tmp = head;
            var o = [];
            
            while(tmp){
                if(tmp.getBody() !== "Head" && tmp.getBody() !== "Tail"){
                    console.log( tmp.getBody());
                }
                o.push(tmp.getBody() );
                tmp = tmp.getNext();
            };
            
            console.log(" ");
            
            return o;
        },
        
        find(s) {
            
        },
        
        remove(n) {
            
        },
        
        insertAtTail(s) {
            
            let tmp = node().init(s);
            
            insert(tmp, tail, tail.getPrev() );
            
        },
        
        insertAtHead(s) {
            
            let tmp = node().init(s);
            
            insert(tmp, head.getNext(), head);
        },
        
        insertSorted(n) {
            
            var nodeToAdd = node().init(n);
            
            if( isEmpty() ){
             
                insert(nodeToAdd, tail, head);
                return true;
            } else {
            
                let tmp = head.getNext();
                while( tmp ) {
                
                    if( (nodeToAdd.getBody() <= tmp.getBody() ) || ( tmp.getNext() === null ) ){
                        
                        insert(nodeToAdd, tmp, tmp.getPrev() );
                        return true;
                    } else { 
                    
                        tmp = tmp.getNext();
                    }
                }
                return false;
            }
        },
    } //end return
};



let L = linkedList();

L.traverse();
L.insertAtTail("one");
L.traverse();

L.insertAtTail("two");
L.insertAtTail("three");
L.traverse();

L.insertSorted("four");
L.insertSorted("five");
L.insertSorted("six");
L.traverse();