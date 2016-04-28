"use strict";

let ColorfulGarden = function() {
  
    let checkValid = function(garden) {
     
        console.log(typeof(garden));
        console.log(typeof(garden[0]));
        let len = garden[0].length;
        
        for(let i = 0; i<len ; i++) {
         
            if(i < len -1){
             
                if(garden[0][i] === garden[0][i+1]){
                    console.log('invalid garden');
                    return false;
                }
            }
            
            if(garden[0][i] === garden[1][i]){
                console.log('invalid garden');
                return false;
            }
        }
        console.log('valid garden');
        return true;
    }
    
    return {
     
        rearrange(garden) {
         
            if( !checkValid(garden) ){
                
                
            }
        }
        
    }
};

let myGarden = ColorfulGarden();

myGarden.rearrange( ["abc" , "bba"] );