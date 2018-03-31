import Big from 'big.js';
export default function massConversion(leftUnit,rightUnit,
  numValue,direction){
             const leftToRight=direction;
             const one = Big(numValue);
             // console.log( (rightUnit==='kilogram'));
             if(leftUnit==='pound' && rightUnit==='pound'){
               return one.toString();
             }
             if(leftUnit==='pound' && rightUnit==='kilogram'){
               if(leftToRight){
                return one.div(2.2046).toString();
                  }
                 return one.times(2.2046).toString();
             };
             if(leftUnit==='pound' && rightUnit==='gram'){
              if(leftToRight){
               return one.times(0.0022046).toString();
                 }
                return one.div(0.0022046).toString();
            };
            if(leftUnit==='pound' && rightUnit==='miligram'){
              if(leftToRight){
               return one.times(453592.292197).toString();
                 }
                return one.div(453592.292197).toString();
            };
             if(leftUnit==='kilogram' && rightUnit==='pound'){
                if(leftToRight){
                  return one.times(2.2046).toString();
                }
                return one.div(2.2046).toString();
             };
             if(leftUnit==='gram' && rightUnit==='pound'){
              if(leftToRight){
                return one.times(0.002205).toString();
              }
              return one.div(0.002205).toString();
           };
           if(leftUnit==='miligram' && rightUnit==='pound'){
            if(leftToRight){
              return one.div(453592.292197).toString();
            }
            return one.times(453592.292197).toString();
         };
             if(leftUnit==='kilogram' && rightUnit==='kilogram'){
               return one.toString();
             };
             if(leftUnit==='gram' && rightUnit==='gram'){
              return one.toString();
            };
            if(leftUnit==='miligram' && rightUnit==='miligram'){
              return one.toString();
            };
             if((leftUnit==='kilogram') && (rightUnit==='gram')){
                if(leftToRight){
                return one.times(1000).toString();
                }
                ;
                return one.div(1000).toString();
             };
             if(leftUnit==='kilogram' && rightUnit==='miligram'){
                if(leftToRight){
                 return one.times(1000000).toString();
                }
                ;
                 return  one.div(1000).toString();
             }
             if(leftUnit==='gram' && rightUnit==='kilogram'){
                if(leftToRight){
                  ;
                   return one.div(1000).toString();
                   } 
                   return one.times(1000).toString(); 
             }
             if(leftUnit==='gram' && rightUnit==='miligram'){
                if(leftToRight){
                  return one.times(1000).toString();
                }
                ;
                  return  one.div(1000).toString();
             }
             if(leftUnit==='miligram' && rightUnit==='gram'){
               if(leftToRight){
                ;
               return  one.div(1000).toString();
               }
               return one.times(1000).toString();
            }
            if(leftUnit==='miligram' && rightUnit==='kilogram'){
               if(leftToRight){
                ;
               return one.div(1000000).toString();
               }
               return one.times(1000000).toString();
            }
          
    };
         
     