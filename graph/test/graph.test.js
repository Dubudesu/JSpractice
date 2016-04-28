
function listNodes(g){
 
    let nodeList = g.getNodes();
    
    let l = nodeList.length;
    
     for(let i = 0; i < l; i++){
        console.log( nodeList[i].getData() );
            if( nodeList[i].getAdjList() ){
                listAdj( nodeList[i] );
            }
     }
    
}

function listAdj( n ) {
 
    let adjlist = n.getAdjList();
    let l = adjlist.length;
    
    for(let i = 0; i < l; i++){
        if( adjlist[i].getAdjList() ){
            listAdj( adjlist[i]);
        }
        console.log("    " + adjlist[i].getData() )
    }
}

function test() {

var myGraph = graph();

var node1 = myGraph.addNode( '1' );
var node2 = myGraph.addNode( '2' );
var node3 = myGraph.addNode( '3' );

node1.addAdj( node2 );
node2.addAdj( node3 );

listNodes( myGraph );

}