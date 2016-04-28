
var graph = function() {
 
    "use strict";
    
    let nodes = [];
    
    return {
     
        
        addNode( node ) {
            
            if( Array.isArray( node ) ){
                
                let l = node.length;
                for(let i = 0; i < l; i++){
                    
                    nodes.push( graphNode( node[i] ) );
                }
            }else{
                
                let tmp = graphNode( node );
                nodes.push( tmp );
                return tmp;
            }
            
        },
        
        getNodes(){
         
            return nodes;
        }
        
    };
};

var graphNode = function( dataToAdd ) {
 
    "use strict";
    
    let adjList = [];
    let data = dataToAdd;

    return {
     
        getAdjList() {
         
            return adjList;
        },
        getData() {
         
            return data;
        },
        
        addAdj( node ) {
            
            if( Array.isArray( node ) ){
                
                let l = node.length;
                for(let i = 0; i < l; i++){
                    
                    adjList.push( node[i] );
                }
            }else {
                adjList.push( node );
            }
        },
        
        remAdj( node ) {
         
            //pseudo
            /*
             if node exists in the adjacency adjList
                splice the node out
             */
        },
        
    };
};
