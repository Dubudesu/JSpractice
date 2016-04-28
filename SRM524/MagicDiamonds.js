"use strict";

//complete

let magicDiamonds = function() {
    
    let isPrime = function( num ) {
     
        if( num === 2 ){
            return true;
        }
        if( num === 1 || num % 2 === 0 ){
            return false;
        }
        
        let max = Math.ceil( Math.sqrt( num ) );
        
        for (let i = 3; i <= max; i+=2){
         
            if(num % i === 0){
                return false;
            }
        }
        return true;
    }
    
    return {
     
        minimalTransfer(n) {
         
            let newNum = n;
            let transfers = 1;
            
            while( isPrime( newNum ) ){
                
                --newNum;
                ++transfers;
            }
            
            return transfers;
        },
        
    }
}


let diamondT = magicDiamonds();

console.log( diamondT.minimalTransfer(5) );
